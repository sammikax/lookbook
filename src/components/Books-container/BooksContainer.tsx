import React, { useEffect, useState } from 'react';
import { fetchData } from "./../../api/base-api";
import "./booksContainer.css";
import BookModal from './Bookmodal'; 
import { useTranslation } from 'react-i18next';
import { shelfIdByLanguage } from "./../../utils/fetchData";

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        };
    };
}



const BooksContainer: React.FC = () => {
    const { i18n } = useTranslation(); 
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                setLoading(true);
                const shelfId = shelfIdByLanguage[i18n.language] || '1001';
                const result = await fetchData({
                    url: `https://www.googleapis.com/books/v1/users/103639002406122584582/bookshelves/${shelfId}/volumes`,
                    method: 'GET',
                });
                setBooks(result.items || []);
            } catch (error) {
                setError('Hubo un error al cargar los libros.');
            } finally {
                setLoading(false);
            }
        };

        getBooks();
    }, [i18n.language]); 

    if (loading) return (
        <div className="spinner-border text-dark m5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className="book-list-title">books list</h1>
            <div className='books-container'>
                {books.map((book, i) => (
                    <div key={i} className="card p-1" style={{ width: "11.2rem" }}>
                        <img
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            className="card-img-center books-cover"
                            alt={`Portada de ${book.volumeInfo.title}`}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-bs-toggle="modal"
                                data-bs-target={`#Modal${i}`} 
                            >
                                Info
                            </button>
                            <BookModal book={book} index={i} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksContainer;

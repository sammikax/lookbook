import React, { useEffect, useState, useCallback } from 'react';
import type { Image, ModalImageData } from '../../types/imageTypes'; 
import imagesData from '../../assets/outfits.json'; 

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

interface BookModalProps {
    book: Book;
    index: number;
}


const typedAllOutfitData: ModalImageData = imagesData as ModalImageData;
console.log('Datos de outfits cargados:', typedAllOutfitData);
const BookModal: React.FC<BookModalProps> = ({ book, index }) => {
    const [showOutfitImages, setShowOutfitImages] = useState(false);

    const handleShowImages = () => {
        setShowOutfitImages(true);
    };

    const resetShowOutfitImages = useCallback(() => {
        setShowOutfitImages(false);
    }, []);

    useEffect(() => {
        const modalElement = document.getElementById(`Modal${index}`);
        if (modalElement) {
            modalElement.addEventListener('show.bs.modal', resetShowOutfitImages);
            return () => {
                modalElement.removeEventListener('show.bs.modal', resetShowOutfitImages);
            };
        }
    }, [index, resetShowOutfitImages]);

    console.log('Libro actual:', book);
    const outfitSetKey = book.id;
    console.log('Clave para outfits (outfitSetKey):', outfitSetKey);
    const currentOutfitImages: Image[] = typedAllOutfitData[outfitSetKey] || typedAllOutfitData["defaultBookOutfits"] || [];
    console.log('Imágenes de outfit actuales (currentOutfitImages):', currentOutfitImages);


    return (
        <div
            className="modal fade"
            id={`Modal${index}`}
            tabIndex={-1}
            aria-labelledby={`ModalLabel${index}`}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-3" id={`ModalLabel${index}`}>
                            {book.volumeInfo.title}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body fs-6 text-wrap">
                        {book.volumeInfo.description || "No description available"}

                        {showOutfitImages && (
                            <div className="outfit-images mt-2">
                                {currentOutfitImages.length > 0 ? (
                                    currentOutfitImages.map((image) => (
                                        <img
                                            key={image.id}
                                            src={image.url}
                                            alt={image.alt}
                                            className="img-fluid p-2"
                                        />
                                    ))
                                ) : (
                                    <p>No hay ideas de outfits disponibles para este libro.</p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleShowImages}
                        >
                            Outfits Ideas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookModal;
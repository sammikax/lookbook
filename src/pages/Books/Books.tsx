import letter from "./../../assets/letter.png"
import NavBar from "../Navbar";
import "./books.css"
import BookList from "../../components/Books-container/BooksContainer";
function Books() {
    return (
        <>
            <img src={letter} className="bg" alt="background-image" />
            <NavBar />
            <BookList />
        </>
    );
};

export default Books;
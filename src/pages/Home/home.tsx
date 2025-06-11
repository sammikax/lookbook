import { useTranslation } from "react-i18next";
import NavBar from "../Navbar/index";
import letter from "./../../assets/letter.png";
import magazine from "./../../assets/magazine.png";
import "./../Books/books.css"
import "./home.css";
import "./../../i18n/i18n"

function Home() {
    const { t } = useTranslation("home");
    return (
        
        <div>    
            <img src={letter} className="bg" alt="background-image" />  
            <img src={magazine} className="bg1" alt="background-image" />
            <NavBar />
            <div className="title-wrapper">
                <h1 className="main-title">{t("homepage.mainTitle")}</h1>
            </div>
            <div className="div-container"> 
                <h1 className="Title">{t("homepage.subtitle")}</h1>
            </div>
        </div>
    );
};

export default Home;
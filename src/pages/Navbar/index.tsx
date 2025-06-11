import { useState, useEffect } from "react";
import "./style.css";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import { getActiveUser } from "../../LocalStorage";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation("navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const user = getActiveUser();
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
         {!isUserLoggedIn && (
          <li>
            <Link to={"/"} className="nav-li">
              {t("navbar.home")}
            </Link>
          </li>
        )}
        {isUserLoggedIn ? (
          <>
            <li>
              <Link to={"/books"} className="nav-li">
                 {t("navbar.books")}
              </Link>
            </li>
            <li>
              <Link to={"/profile"} className="nav-li">
                 {t("navbar.profile")}
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={"/login"} className="nav-li">
              {t("navbar.login")}
            </Link>
          </li>
        )}
        <li>
            <Link to={"/membership"} className="nav-li">
              {t("navbar.membership")}
            </Link>
          </li>
        <li>
          <div className="btn-group">
            <button 
            className="btn btn btn-sm dropdown-toggle fw-bold text-language" 
            type="button" data-bs-toggle="dropdown" 
            aria-expanded="false" 
            style={{ backgroundColor: "#9C7E69", color: "#fff" }}>
              {t("navbar.language")}
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item fw-bold text-language" onClick={() => i18n.changeLanguage("en")}>English</button></li>
              <li><button className="dropdown-item fw-bold text-language" onClick={() => i18n.changeLanguage("es")}>Español</button></li>
              <li><button className="dropdown-item fw-bold text-language" onClick={() => i18n.changeLanguage("fr")}>France</button></li>
              <li><button className="dropdown-item text-language" onClick={() => i18n.changeLanguage("ja")}>日本語</button></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

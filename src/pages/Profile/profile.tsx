import letter from "./../../assets/letter.png"
import NavBar from "../Navbar";
import Avatar from "./../../assets/pfp.jpg";
import "./profile.css"
import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, type userData } from "../../LocalStorage";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Profile = () => {
    const { t } = useTranslation("profile")
    const [activeUser, setActiveUser] = useState<userData>();
    const navigate = useNavigate();
    useEffect(() => {
        const data = getActiveUser()
        if (data == null) {
            navigate("/login");
        }

        setActiveUser(data);
    }, []);

    const handleLogOut = () => {
        deleteActiveUser();
        navigate("/login");
    }
    return <>

        <img src={letter} className="bg" alt="background-image" />
        <NavBar />
        <div className="user-session-controls">
            <img
                src={activeUser?.avatarUrl || Avatar} 
                alt={t('profilePictureAlt', { username: activeUser?.username }) || `Foto de perfil de ${activeUser?.username || 'usuario'}`}
                className="profile-picture" 
            />
            <p className="user-welcome">{t("welcome")} {activeUser?.username}!</p>
            <button onClick={handleLogOut} className="btn-logout">{t("logout")}</button>
        </div>

    </>;
}
export default Profile;


import NavBar from "../Navbar";
import "./login.css";
import letter from "./../../assets/letter.png"
import logo from "./../../assets/logo.png"
import LoginForm from "../../components/Login-form/LoginForm";

export default function Login() {
    return (
        <>
            <img src={logo} className="bg" alt="background-image" />
            <NavBar />
            <LoginForm />
        </>
    );
};



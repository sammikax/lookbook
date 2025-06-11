import NavBar from "../Navbar";
import letter from "./../../assets/letter.png"
import MembershipContainer from "../../components/membership-container/MembershipContainer";

export default function Membership() {
    return (
        <>
            <img src={letter} className="bg" alt="background-image" />
            <NavBar />
            <MembershipContainer />
        </>
    );
};



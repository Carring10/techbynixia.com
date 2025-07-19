import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <Link to="/">
            <div className="nav-container">
                <h1>{"<"} TechByNixia /{">"}</h1>
            </div>
        </Link>
    )
}
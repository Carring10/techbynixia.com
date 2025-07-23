import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-contents-container">
                    <h1 className="heading">Tech made simple</h1>
                    <p className="subheading">Guides | Advice | Products</p>
                    <div className="button-container">
                        <Link to="/posts" className="button">Start Reading</Link>
                        {/* <button className="button">About Me</button> */}
                    </div>
                </div>
                    <img className="logo" src="images/canva-logo.png"/>
            </div>
        </>
    )
}
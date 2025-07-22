import { Navbar } from "../Navbar/Navbar";
// import { ArticleList } from "../ArticleList/ArticleList";
import "./home.css";

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="home-contents-container">
                    <h1 className="heading">Tech made simple</h1>
                    <p className="subheading">Because you don't need a degree to fix your PC</p>
                    <div className="button-container">
                        <button>Start Reading</button>
                        <button>About Me</button>
                    </div>
                </div>
                    <img className="logo" src="images/canva-logo.png"/>
            </div>
        </>
    )
}
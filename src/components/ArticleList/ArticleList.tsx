import { posts } from "../../utils/loadMarkdown"
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./articleList.css";

export const ArticleList = () => {
    {console.log(posts)}
    return (
        <>
            <Navbar />
            <div className="article-list-container">
                {posts.map((post, index) => (
                    <Link to={`/posts/${post.slug}`} key={index}>
                        <article>
                            <img src={post.image} width="500" height="auto" />
                            <div className="post-contents-container">
                                <h1 className="post-title">{post.title}</h1>
                                <p>{post.description}</p>
                                <p>{post.classification}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </>
    )
}
import { posts } from "../../utils/loadMarkdown"
import { Link } from "react-router-dom";
import "./articleList.css";

export const ArticleList = () => {
    return (
        <div className="article-list-container">
            {posts.map((post, index) => (
                <Link to={`/posts/${post.slug}`} key={index}>
                    <article>
                        <h1>{post.title}</h1>
                        <img src={post.image} width="500" height="auto" />
                    </article>
                </Link>
            ))}
        </div>
    )
}
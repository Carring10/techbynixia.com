import { posts } from "../../utils/loadMarkdown"
import { Link } from "react-router-dom";

export const ArticleList = () => {
    return (
        <div>
            {posts.map((post, index) => (
                <Link to={`/posts/${post.slug}`} key={index}>
                    <article>
                        <h1>{post.title}</h1>
                    </article>
                </Link>
            ))}
        </div>
    )
}
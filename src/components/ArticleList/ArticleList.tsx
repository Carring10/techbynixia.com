import { posts } from "../../utils/loadMarkdown"
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./articleList.css";

export const ArticleList = () => {
    { console.log(posts) }
    return (
        <>
            <Navbar />
            <div className="article-list-container">
                <div className="blog-banner">
                    <img src="images/nixia-logo.png" width="50px" height="50px" />
                    <h2 className="blog-banner-title">Tech Blog</h2>
                </div>
                <h3 className="latest-post">Latest Posts</h3>
                {posts.map((post, index) => (
                    <Link to={`/posts/${post.slug}`} key={index} className="link-container">
                        <article>
                            <img className="post-img" src={post.image} />
                            <div className="post-contents-container">
                                <h1 className="post-title">{post.title}</h1>
                                <p>{post.description}</p>
                                <p>{post.classification} &#8226; {post.date}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </>
    )
}
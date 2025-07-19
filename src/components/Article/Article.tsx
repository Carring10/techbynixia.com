import { Navbar } from "../Navbar/Navbar";
import { useParams } from 'react-router-dom';
import { posts } from "../../utils/loadMarkdown";
import ReactMarkdown from 'react-markdown';
import "./article.css";

export const Article = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Not found</p>

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}
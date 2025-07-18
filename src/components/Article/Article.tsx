import { Navbar } from "../Navbar/Navbar";
import { useParams } from 'react-router-dom';
import { posts } from "../../utils/loadMarkdown";
import ReactMarkdown from 'react-markdown';

export const Article = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Not found</p>

  return (
    <>
    <Navbar />
    <div className="prose">
      {post.image && <img src={post.image} alt={post.title} />}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
    </>
  )
}
import { Navbar } from "../Navbar/Navbar";
import { useParams } from 'react-router-dom'
import { posts } from "../../utils/loadMarkdown"

export const Article = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Not found</p>

  return (
    <>
    <Navbar />
    <div className="prose">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.image && <img src={post.image} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    </>
  )
}
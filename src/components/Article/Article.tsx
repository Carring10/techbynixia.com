import { useParams } from 'react-router-dom'
import { posts } from "../../utils/loadMarkdown"

export const Article = () => {
  console.log(posts)
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  console.log(post)

  if (!post) return <p>Not found</p>

  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.image && <img src={post.image} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
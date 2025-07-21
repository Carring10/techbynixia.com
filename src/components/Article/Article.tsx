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
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  decoding="async"
                  width={props.width || '800'}
                  height={props.height || 'auto'}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}
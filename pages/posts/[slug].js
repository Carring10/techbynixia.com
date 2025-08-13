import { getAllPostSlugs, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown";

export default function ArticlePage({ post }) {
  console.log(post)
  return (
    <article>
      <h1>{post.meta.title}</h1>
      <p>{post.meta.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs(); 
  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  return {
    props: { post },
  };
}

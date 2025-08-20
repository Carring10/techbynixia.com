import { getAllPostSlugs, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
import styles from "./[slug].module.css";

export default function ArticlePage({ post }) {
  return (
    <article className={styles.slugArticleContainer}>
      <h1 className={styles.slugH1}>{post.meta.title}</h1>
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

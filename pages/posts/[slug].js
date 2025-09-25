import { getAllPostSlugs, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
import styles from "./[slug].module.css";

export default function ArticlePage({ post }) {
  return (
    <article className={styles.postArticleContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.postH1}>{post.meta.title}</h1>
        <p className={styles.date}>{post.meta.date}</p>
      </div>
      <div className={styles.postContent}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
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

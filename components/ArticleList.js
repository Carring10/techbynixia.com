import Link from 'next/link';
import styles from "../page.module.css";

const ArticleList = ({ posts }) => {
  return (
    <>
      <main className={styles.main}>
        <h1>How to Buy Guides</h1>
        <ul>
          {posts.map(({ slug, title, description, date }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <h1>{title}</h1>
              </Link>
              <p>{description}</p>
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ArticleList;

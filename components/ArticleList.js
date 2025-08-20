import Link from 'next/link';
import styles from "../page.module.css";

const ArticleList = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <main className={styles.main}>
        <h1>Buyer Guides</h1>
        <ul>
          {posts.map(({ slug, title, description, date }) => (
            <div key={slug}>
              <Link href={`/posts/${slug}`}>
                <h1>{title}</h1>
              </Link>
              <p>{description}</p>
              <small>{date}</small>
            </div>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ArticleList;

import Link from 'next/link';
import styles from "./ArticleList.module.css";
import Image from 'next/image';

const ArticleList = ({ posts }) => {
  return (
    <>
      <div style={{ margin: 80 }}>
        <h1>Buyer Guides</h1>
        <div className={styles.articleContainer}>
          {posts.map(({ slug, title, img, description, date }) => (
            <div key={slug} className={styles.posts}>
              <Link href={`/posts/${slug}`}>
                <Image
                  src={img}
                  width={250}
                  height={200}
                  alt="Placeholder"
                />
              <h3 className={styles.title}>{title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;

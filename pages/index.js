import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <h1 className={styles.featured}>Today's Hottest Deals</h1> */}
        <div className={styles.content}></div>
        <h2>Recent Posts</h2>
        <div className={styles.postsContainer}>
          <div>
            <div className={styles.recentPosts}></div>
            <h2>This is an example of a title</h2>
            <Link className={styles.link} href="">Read More</Link>
          </div>
          <div>
            <div className={styles.recentPosts}></div>
            <h2>This is an example of a title</h2>
            <Link className={styles.link} href="">Read More</Link>
          </div>
        </div>
      </main>
    </>
  );
}

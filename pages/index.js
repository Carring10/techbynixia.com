import styles from "../page.module.css";
import Navbar from "../src/app/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Today's Hottest Deals</h1>
      </main>
    </>
  );
}

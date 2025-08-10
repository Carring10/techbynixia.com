import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

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

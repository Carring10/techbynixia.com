import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Home</h1>
        <Link href="/articles">Start Reading</Link>
      </main>
    </>
  );
}

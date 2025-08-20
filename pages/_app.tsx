import "../globals.css";
import styles from "../page.module.css"
import Navbar from "../components/Navbar/Navbar";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

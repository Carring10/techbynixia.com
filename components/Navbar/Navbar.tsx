import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.brand}>
        <h2>Tech by Nixia</h2>
      </Link>

      <div className={styles.links}>
        <h4>SHOP</h4>
        <Link href="/articles"><h4>GUIDES</h4></Link>
        <h4>ABOUT ME</h4>
      </div>
    </nav>
  );
};

export default Navbar;

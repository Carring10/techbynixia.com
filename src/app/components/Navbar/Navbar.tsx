import React from 'react';
import Image from 'next/image';
import styles from "./Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image
                    src="/techbynixia-logo.png"
                    width={150}
                    height={70}
                    alt="Laptop logo"
                />
            </Link>
            <div className={styles.links}>
                <h4>SHOP</h4>
                <Link href="/articles"><h4>HOW TO</h4></Link>
                <h4>ABOUT ME</h4>
            </div>
        </nav>
    )
}

export default Navbar
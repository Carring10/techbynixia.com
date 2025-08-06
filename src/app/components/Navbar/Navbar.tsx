import React from 'react';
import Image from 'next/image';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Image
                src="/techbynixia-logo.png"
                width={150}
                height={70}
                alt="Laptop logo"
            />
            <div className={styles.links}>
                <h4>SHOP</h4>
                <h4>HOW TO</h4>
                <h4>ABOUT ME</h4>
            </div>
        </nav>
    )
}

export default Navbar
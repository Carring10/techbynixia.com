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
                <p>Shop</p>
                <p>How To</p>
                <p>About Me</p>
            </div>
        </nav>
    )
}

export default Navbar
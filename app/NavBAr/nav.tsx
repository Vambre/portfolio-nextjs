"use client";

import Link from "next/link";
import styles from './nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/">Home</Link></li>
                <li className={styles.li}><Link href="/Java/">Java</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
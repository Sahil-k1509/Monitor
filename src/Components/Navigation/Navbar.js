import React from 'react';
import styles from './Navbar.module.css';

const navigation = () => (
    <nav className={styles.navbar}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/subject">Subjects</a></li>
            <li><a href="/participant">Participants</a></li>
        </ul>
    </nav>
);

export default navigation;
import React from 'react';
import styles from './Navbar.module.css';
import {NavLink, Route}  from 'react-router-dom';

const navigation = () => (
    <nav className={styles.navbar}>
        <ul>
            <li><NavLink to="/" exact activeStyle={{color: 'white', textShadow: '0 0 5px white, 0 0 15px white'}}>Home</NavLink></li>
            <li><NavLink to="/subject" exact activeStyle={{color: 'white', textShadow: '0 0 5px white, 0 0 15px white'}}>Subjects</NavLink></li>
        </ul>
    </nav>
);

export default navigation;
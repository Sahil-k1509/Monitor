import React from 'react';
import background from '../../Assets/desk.jpg';
import styles from './Home.module.css';

const home = () => (
    <div className={styles.poster}>
        <div className={styles.text}>
            <h1 className={styles.title}>
                <span className={styles.m}>M</span>
                <span className={styles.o}>o</span>
                <span className={styles.m}>n</span>
                <span className={styles.o}>i</span>
                <span className={styles.m}>t</span>
                <span className={styles.o}>o</span>
                <span className={styles.m}>r</span>
            </h1>
            <h3 className={styles.tag}>Supervise from behind the screen</h3>
        </div>
        <img src={background} alt=""/>
    </div>
);

export default home;
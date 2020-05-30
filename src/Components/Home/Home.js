import React from 'react';
import background from '../../Assets/desk.jpg';
import styles from './Home.module.css';

const home = () => (
    <div className={styles.poster}>
        <div className={styles.text}>
            <h1 className={styles.title}>Monitor</h1>
            <h3 className={styles.tag}>Supervise from behind the screen</h3>
        </div>
        <img src={background} />
    </div>
);

export default home;
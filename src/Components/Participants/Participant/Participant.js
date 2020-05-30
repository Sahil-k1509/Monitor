import React from 'react';
import styles from './Participant.module.css';

const participant = (props) => {

    return (
        <div className={styles.student}>
            <div>Participant</div>
            <div>name: {props.name}</div>
            <div>rollno: {props.rollno}</div>
            <button onClick={props.click}>Delete</button> 
        </div>
        );
}

export default participant;
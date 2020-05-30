import React from 'react';
import styles from './Participant.module.css';

const participant = (props) => {

    return (
        <div className={styles.student}>
            <div>Name: {props.name}</div>
            <div>Roll no: {props.rollno}</div>
            <button onClick={props.click}>Deregister</button> 
        </div>
        );
}

export default participant;
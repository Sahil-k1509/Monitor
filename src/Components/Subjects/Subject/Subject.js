import React from 'react';
import styles from './Subject.module.css';

const subject = (props) => {
    const link = props.SubjectName+"/participant";

    return (
            <div className={styles.subject}>
                <div><strong>Subject:</strong> {props.SubjectName}</div>   
                <div><strong>Subject Code:</strong> {props.Code}  </div>
                <div><strong>Credits:</strong> {props.Credit} </div>
                <div><strong>Semester:</strong> {props.Semester}</div>
                <div><a href={link}>Visit Students</a> </div>
            </div>
        );
}

export default subject
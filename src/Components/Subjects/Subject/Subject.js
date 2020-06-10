import React from 'react';
import styles from './Subject.module.css';
import {Link} from 'react-router-dom';

const subject = (props) => {
    const link = "/Monitor/"+props.SubjectName+"/participant";

    return (
            <div className={[styles.subject, styles.animated, styles.wiggle].join(' ')}>
                <div><strong>Subject:</strong> {props.SubjectName}</div>   
                <div><strong>Subject Code:</strong> {props.Code}  </div>
                <div><strong>Credits:</strong> {props.Credit} </div>
                <div><strong>Semester:</strong> {props.Semester}</div>
                <div className={styles.studentlink}><Link to={{pathname:link, search: '?subject='+props.SubjectName}}>Visit Students</Link> </div>
            </div>
        );
}

export default subject;
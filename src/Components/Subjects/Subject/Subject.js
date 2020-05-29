import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const subject = (props) => {
    const link = props.SubjectName+"/participant";

    return (
            <div>
                <div>Name: {props.SubjectName}</div>   
                <div> Code: {props.Code}  </div>
                <div>Credit: {props.Credit} </div>
                <div>Semester: {props.Semester}</div>
                <a href={link}>Visit Participants</a> 
            </div>
        );
}

export default subject
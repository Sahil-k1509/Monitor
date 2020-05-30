import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Subject from './Subject/Subject';

class Subjects extends Component{
    state = {
        subjects: {
            'PDS': ["CS10001" ,"3", "1"],
            'Algorithms-1': ["CS20001" ,"4", "3"],
            'Discrete Structures': ["CS21011" ,"3", "3"],
            'Compilers': ["CS31001" ,"2", "5"],
            'Operating System': ["CS60030" ,"3", "6"],
            'Game Theory': ["CS60069" ,"2", "6"],
        }
    }

    render () {
        const assigned_subjects = Object.keys(this.state.subjects)
        .map(subject => {
            return <Subject key={subject} SubjectName={subject} Code={this.state.subjects[subject][0]} Credit={this.state.subjects[subject][1]} Semester={this.state.subjects[subject][2]}/>
        });

        return (
        <Auxiliary>
                {assigned_subjects}
        </Auxiliary>
        );
    }
 }
export default Subjects;
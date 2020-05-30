import React, { Component } from 'react';
import Participant from './Participant/Participant';
import styles from './Participants.module.css';

class Participants extends Component{
    
    state = {
        students: null
    }

    componentDidMount () {
        this.setState({students: {'PDS': {    
            'pds1': 'rollpds1',
            'pds2': 'rollpds2',
            'pds3': 'rollpds3',
            'pds4': 'rollpds4',
            'pds5': 'rollpds5',
            'pds6': 'rollpds6',
        },
        'Algorithms-1': { 
                'algo1-1': 'rollalgo1-1',
                'algo1-2': 'rollalgo1-2',
                'algo1-3': 'rollalgo1-3',
                'algo1-4': 'rollalgo1-4',
                'algo1-5': 'rollalgo1-5',
                'algo1-6': 'rollalgo1-6',

        },
        'Algorithms-2': {
                'algo2-1': 'rollalgo2-1',
                'algo2-2': 'rollalgo2-2',
                'algo2-3': 'rollalgo2-3',
                'algo2-4': 'rollalgo2-4',
                'algo2-5': 'rollalgo2-5',
                'algo2-6': 'rollalgo2-6',

        },
        'Discrete Structures': {
                'discStruct1': 'rolldiscStruct1',
                'discStruct2': 'rolldiscStruct2',
                'discStruct3': 'rolldiscStruct3',
                'discStruct4': 'rolldiscStruct4',
                'discStruct5': 'rolldiscStruct5',
                'discStruct6': 'rolldiscStruct6',

        },
        'Operating System': {
                'Os1': 'rollOs1',
                'Os2': 'rollOs2',
                'Os3': 'rollOs3',
                'Os4': 'rollOs4',
                'Os5': 'rollOs5',
                'Os6': 'rollOs6',

        },
        'Game Theory': {
                'Game1': 'rollGame1',
                'Game2': 'rollGame2',
                'Game3': 'rollGame3',
                'Game4': 'rollGame4',
                'Game5': 'rollGame5',
                'Game6': 'rollGame6',
        }}});
    }

    deleteHandler = (name, students, subject) => {
        delete students[subject][name];
        this.setState({students});
        alert(`${name} has been succesfully deregistered from ${subject}.`)
    }

    render () {
        
        const subject = this.props.location.search.slice(9);
        let assigned = null;
        if (this.state.students !== null){
        assigned = Object.keys(this.state.students[subject])
        .map((name) => {
            return <Participant key={this.state.students[subject][name]} name={name} rollno={this.state.students[subject][name]} click={() => this.deleteHandler(name, this.state.students, subject)} />;
        });
        }
        return (
            <div style={{'margin': '6rem 0', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <div style={{color: 'white', textAlign: 'center', fontSize: '2rem', fontWeight: '500', textTransform: 'uppercase', backgroundColor: 'rgba(0,0,0, 0.2)', padding: '1rem'}}>Students Enrolled for {subject} </div><br/><br/>
                {assigned}
                <button className={styles.AddBtn} onClick={() => {alert("All students have been added to the platform.")}}>Add all participants</button>
            </div>
        );
    }
} 

export default Participants;
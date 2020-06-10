import React, { Component } from 'react';
import Participant from './Participant/Participant';
import styles from './Participants.module.css';

class Participants extends Component{
    
    state = {
        students: null
    }

    componentDidMount () {
        this.setState({students: {'PDS': {    
            'Amar': 'rollpds1',
            'Akbar': 'rollpds2',
            'Anthony': 'rollpds3',
            'Neel': 'rollpds4',
            'Nitin': 'rollpds5',
            'Mukesh': 'rollpds6',
        },
        'Algorithms-1': { 
                'Dinesh': 'rollalgo1-1',
                'Suresh': 'rollalgo1-2',
                'Kamlesh': 'rollalgo1-3',
                'Mahesh': 'rollalgo1-4',
                'Rakesh': 'rollalgo1-5',
                'Jayesh': 'rollalgo1-6',

        },
        'Algorithms-2': {
                'Hema': 'rollalgo2-1',
                'Rekha': 'rollalgo2-2',
                'Jaya': 'rollalgo2-3',
                'Shushma': 'rollalgo2-4',
                'Nirma': 'rollalgo2-5',
                'Nirmala': 'rollalgo2-6',

        },
        'Discrete Structures': {
                'Heena': 'rolldiscStruct1',
                'Meena': 'rolldiscStruct2',
                'Zeenat': 'rolldiscStruct3',
                'Salma': 'rolldiscStruct4',
                'Asha': 'rolldiscStruct5',
                'Sheena': 'rolldiscStruct6',

        },
        'Operating System': {
                'Priya': 'rollOs1',
                'Monika': 'rollOs2',
                'Ratan': 'rollOs3',
                'Mani': 'rollOs4',
                'Harsh': 'rollOs5',
                'Harshit': 'rollOs6',

        },
        'Game Theory': {
                'Samay': 'rollGame1',
                'Varun': 'rollGame2',
                'Bhishma': 'rollGame3',
                'Bharat': 'rollGame4',
                'Agni': 'rollGame5',
                'Akbar': 'rollGame6',
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
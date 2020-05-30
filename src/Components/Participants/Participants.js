import React, { Component } from 'react';

class Participants extends Component{
    
    state = {
        students:{}
    }

    render () {
        const subject = this.props.location.search.slice(9);


        return (
            <div>
                Participant Page <br />

            </div>
        );
    }
} 

export default Participants;
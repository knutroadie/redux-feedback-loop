import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class Feeling extends Component {

    //state
    state = {
        feelingNumber: 0
    }
    //input function
    makeFeeling = (event, feelingNumber) => {
        console.log('making a feeling!', feelingNumber);
        
        this.setState({
            feelingNumber: event.target.value
        })
    }

    //click listener
    dispatchFeeling = () => {
        console.log(this.state);
        this.props.dispatch({
            type: 'FEELING',
            payload: this.state.feelingNumber
        });
        // this.props.history.push('/');
    }


    render() {
        return (
            <>
                <div className="App"></div>
                <h3>how do you feel today?</h3>
                <input type="number" name="quantity" min="1" max="5" value={this.state.feeling} onChange={(event) => this.makeFeeling(event, 'feelingNumber')}></input>
                <button onClick={this.dispatchFeeling}>next</button>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Feeling);
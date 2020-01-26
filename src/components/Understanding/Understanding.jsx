import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Understanding extends Component {

    //state
    state = {
        understandingNumber: 0
    }
    //input function
    makeUnderstanding = (event) => {
        this.setState({
            understandingNumber: event.target.value
        })
    }
    //click listener
    dispatchUnderstanding = () => {
        this.props.dispatch({
            type: 'UNDERSTANDING',
            payload: this.state.understandingNumber
        });
        // this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className="App">
                    <h3>how well are you understanding the content?</h3>
                    <input type="number" name="quantity" min="1" max="5" value={this.state.understanding} onChange={(event) => this.makeUnderstanding(event, 'understandingNumber')}></input>
                    <Router>
                        <Link to="/supported" onClick={this.dispatchUnderstanding}>next</Link>
                    </Router>
                </div>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Understanding);
import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {

    //state
    state = {
        supportedNumber: 0
    }
    //input function
    makeSupported = (event) => {
        this.setState({
            supportedNumber: event.target.value
        })
    }
    //click listener
    dispatchSupported = () => {
        this.props.dispatch({
            type: 'SUPPORTED',
            payload: this.state.supportedNumber
        });
        // this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className="App">
                    <h3>how weel are you being supported?</h3>
                    <input type="number" name="quantity" min="1" max="5" value={this.state.supported} onChange={(event) => this.makeSupported(event, 'supportedNumber')}></input>
                    <Router>
                        <Link to="/comments" onClick={this.dispatchSupported}>next</Link>
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

export default connect(putReduxStateOnProps)(Supported);
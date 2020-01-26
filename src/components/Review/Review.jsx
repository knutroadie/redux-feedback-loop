import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Review extends Component {

    //state
    state = {
        feedback: [
            // feeling: 0,
            // understanding: 0,
            // supported: 0,
            // comments: '',
        ]
    };
    // setState function
    makeFeedback = (event) => {
        console.log(this.state, this.props.reduxState);
        this.setState({
            feedback: [
                ...this.state.feedback,
                feeling: this.props.reduxState.Feeling,
                understanding: this.props.reduxState.Understanding
                supported: this.props.reduxState.Supported
                comments: this.props.reduxState.Comments
            ]
        })
    }
    // click listener
    dispatchFeedback = () => {
        this.props.dispatch({
            type: 'COMMENTS',
            payload: this.state.feedback
        });
        // this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className="App">
                    <div>feeling: {this.props.reduxState.Feeling}</div>
                    <div>understanding: {this.props.reduxState.Understanding}</div>
                    <div>supported: {this.props.reduxState.Supported}</div>
                    <div>comments: {this.props.reduxState.Comments}</div>
                    <Router>
                        <Link to="/thankyou" onClick={(event) => this.makeFeedback(event)}>next</Link>
                        {JSON.stringify(this.props.reduxState)}
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

export default connect(putReduxStateOnProps)(Review);
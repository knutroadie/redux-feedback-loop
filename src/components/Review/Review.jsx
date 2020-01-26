import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Review extends Component {

    postFeedback = () => {
        let feedback = {
            feeling: this.props.reduxState.Feeling,
            understanding: this.props.reduxState.Understanding,
            support: this.props.reduxState.Supported,
            comments: this.props.reduxState.Comments
        }
        // event.preventDefault();
        console.log(`posting feedback`, feedback);
        axios.post('/feedback', feedback)
            .then(() => {
            })
            .catch((error) => {
                alert(error)
            })
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
                        <Link to="/thankyou" onClick={() => this.postFeedback()}>submit</Link>
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
import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

    //state
    state = {
        comments: ''
    }
    //input function
    makeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    //click listener
    dispatchComments = () => {
        this.props.dispatch({
            type: 'COMMENTS',
            payload: this.state.comments
        });
        // this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className="App"></div>
                <h3>anything you want us to know?</h3>
                <input type="text" name="comments" value={this.state.comments} onChange={(event) => this.makeComments(event, 'comments')}></input>
                <Router>
                    <Link to="/review" onClick={this.dispatchComments}>next</Link>
                </Router>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Comments);
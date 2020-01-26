import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { connect } from 'react-redux';


class Review extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <div>feeling: {this.props.reduxState.Feeling}</div>
                    <div>understanding: {this.props.reduxState.Understanding}</div>
                    <div>supported: {this.props.reduxState.Supported}</div>
                    <div>comments: {this.props.reduxState.Comments}</div>
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
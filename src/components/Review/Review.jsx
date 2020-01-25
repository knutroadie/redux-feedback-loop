import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { connect } from 'react-redux';


class Review extends Component {
    render() {
        return (
            <>
                <div className="App">
                    
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
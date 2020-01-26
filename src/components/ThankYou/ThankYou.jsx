import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';

class ThankYou extends Component {
    render() {
        return (
            <>
                <div className="App"></div>
                <h3>thank you!</h3>
                <Router>
                    <Link to="/">do it again</Link>
                </Router>
            </>
        );
    }
}

export default ThankYou;
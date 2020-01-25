import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';

class Understanding extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <h3>how well are you understanding the content?</h3>
                    <input type="number" name="quantity" min="1" max="5"></input>
                    <button>next</button>

                </div>
            </>
        );
    }
}

export default Understanding;
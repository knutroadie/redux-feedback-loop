import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';

class Supported extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <h3>how weel are you being supported?</h3>
                    <input type="number" name="quantity" min="1" max="5"></input>
                    <button>next</button>
                </div>
            </>
        );
    }
}

export default Supported;
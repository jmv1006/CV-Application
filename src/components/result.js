import React, { Component } from "react";
import '../styles/result.css'

class Result extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div id='resultContainer'>
                <div id='headerContainer'>
                    <div id='name'>{this.props.name}</div>
                    <div id='emailPhoneCont'>
                        <div id='email'>{this.props.email}</div>
                        <div id='phone'>{this.props.number}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Result;
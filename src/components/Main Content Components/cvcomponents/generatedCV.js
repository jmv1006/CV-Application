import React, { Component } from "react";
import './cvModule.css'
import CVHeader from "./CVHeader";

class GeneratedCV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, number } = this.props;
        return(
            <div id='generatedCV'>
                <CVHeader name={name} email={email} number={number} />
            </div>
        )
    }
}

export default GeneratedCV;
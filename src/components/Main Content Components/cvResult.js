import React, { Component } from "react";
import GeneratedCV from "./cvcomponents/generatedCV";

class CvResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, number } = this.props;
        return(
            <div id='cvContainer'>
                <GeneratedCV name={name} email={email} number = {number}/>
            </div>
        )
    }
}

export default CvResult;
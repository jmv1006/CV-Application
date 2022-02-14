import React, { Component } from "react";
import './cvModule.css'
import CVHeader from "./CVHeader";
import JobDisplay from "./jobDisplay";

class GeneratedCV extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const jobs = this.props.jobs.map((job) => 
            <JobDisplay key={job.number}/>
        )

        const { name, email, number } = this.props;
        return(
            <div id='generatedCV'>
                <CVHeader name={name} email={email} number={number} />
                {jobs}
            </div>
        )
    }
}

export default GeneratedCV;
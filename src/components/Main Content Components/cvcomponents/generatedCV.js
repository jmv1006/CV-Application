import React, { Component } from "react";
import './cvModule.css'
import CVHeader from "./CVHeader";
import JobDisplay from "./jobDisplay";
import EduDisplay from "./eduDisplay"

class GeneratedCV extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const jobs = this.props.jobs.map((job) => 
            <JobDisplay title={job.title} company={job.company} years={job.years} desc={job.desc} key={job.number}/>
        )

        const educations = this.props.educations.map((edu) => 
            <EduDisplay school={edu.school} major={edu.major} gradYear={edu.gradYear} key={edu.number}/>
        )

        const { name, email, number } = this.props;
        return(
            <div id='generatedCV'>
                <CVHeader name={name} email={email} number={number} />
                <div id='jobsContainer'>
                    <h1 id='experienceLabel'>Experience</h1>
                    {jobs}
                </div>
                <div id="eduContainer">
                    <h1 id='experienceLabel'>Education</h1>
                    {educations}
                </div>
            </div>
        )
    }
}

export default GeneratedCV;
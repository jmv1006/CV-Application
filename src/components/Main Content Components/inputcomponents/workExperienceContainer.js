import React, { Component } from "react";
import './inputmodule.css'
import JobInput from "./jobInput";

class WorkExperienceContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            jobInputs: [],
            jobNumber: 0
        }

        this.addNewJobInput = this.addNewJobInput.bind(this)
        this.saveJobInfoToState = this.saveJobInfoToState.bind(this)
    }

 
    addNewJobInput() {
        this.setState({
            jobNumber: this.state.jobNumber + 1,
            jobInputs: this.state.jobInputs.concat({title: '', company: '', years: '', number: this.state.jobNumber})
        })
        const jobInputs = this.state.jobInputs.map((job) =>
             this.props.onAddJob(job)
        );
    }

    saveJobInfoToState(title, company, years, identifier) {
        for(let i = 0; i < this.state.jobInputs.length; i++) {
            if(this.state.jobInputs[i].number === identifier) {
                this.state.jobInputs[i].title = title;
                this.state.jobInputs[i].company = company;
                this.state.jobInputs[i].years = years;
                this.props.onJobInfoSubmit(this.state.jobInputs[i])
            }
        }
    }


    render() {
        const jobInputs = this.state.jobInputs.map((job, index) =>
            <JobInput sendUpJobInfo={this.saveJobInfoToState} key={this.state.jobInputs[index].number} identifier={this.state.jobInputs[index].number} />
        );

        return(
            <div id='workExperienceContainer'>
                <h1>Work Experience</h1>
                {jobInputs}
                {/* each job wil have its own input that goes here*/}
                <button onClick={this.addNewJobInput}>Add</button>
            </div>
        )
    }
}

export default WorkExperienceContainer;


import React, { Component } from "react";
import GeneralInfo from "./inputcomponents/general";
import WorkExperienceContainer from "./inputcomponents/workExperienceContainer";

class UserInput extends Component {
    constructor(props) {
        super(props);

        this.sendGeneralInfoUp = this.sendGeneralInfoUp.bind(this)
        this.addJobToArr = this.addJobToArr.bind(this)
        this.jobInfoAdd = this.jobInfoAdd.bind(this)
    }

    sendGeneralInfoUp(name, email, number) {
        this.props.onGeneralInfoSendUp(name, email, number)
    }

    addJobToArr(job) {
        this.props.sendJobUp(job)
    }

    jobInfoAdd(job) {
        //send up edited job to parent
        this.props.getJobInfoInput(job);
    }

    render() {
        return(
            <div id='inputContainer'>
                <GeneralInfo onClick={this.sendGeneralInfoUp} />
                <WorkExperienceContainer onJobInfoSubmit={this.jobInfoAdd} onAddJob={this.addJobToArr}/>
            </div>
        )
    }
}

export default UserInput;
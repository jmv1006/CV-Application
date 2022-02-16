import React, { Component } from "react";
import GeneralInfo from "./inputcomponents/general";
import WorkExperienceContainer from "./inputcomponents/workExperienceContainer";
import EducationContainer from "./inputcomponents/educationInputContainer";

class UserInput extends Component {
    constructor(props) {
        super(props);

        this.sendGeneralInfoUp = this.sendGeneralInfoUp.bind(this)
        this.addJobToArr = this.addJobToArr.bind(this)
        this.jobInfoAdd = this.jobInfoAdd.bind(this)
        this.sendUpDeletedJob = this.sendUpDeletedJob.bind(this)

        this.addEduToArr = this.addEduToArr.bind(this)
        this.eduInfoAdd = this.eduInfoAdd.bind(this)
        this.sendUpDeletedEdu = this.sendUpDeletedEdu.bind(this)
    }

    sendGeneralInfoUp(name, email, number) {
        this.props.onGeneralInfoSendUp(name, email, number)
    }
    ///////////////////////////////////

    addJobToArr(job) {
        this.props.sendJobUp(job)
    }


    jobInfoAdd(job) {
        //send up edited job to parent
        this.props.getJobInfoInput(job);
    }

    sendUpDeletedJob(arr) {
        this.props.reflectDeletedJob(arr)
    }
    /////////////////////////////////////////////

    addEduToArr(edu) {
        this.props.sendEduUp(edu)
    }

    eduInfoAdd(edu) {
        //send up edited job to parent
        this.props.getEduInfoInput(edu);
    }

    sendUpDeletedEdu (arr) {
        this.props.reflectDeletedEdu(arr)
    }


    render() {
        return(
            <div id='inputContainer'>
                <GeneralInfo onClick={this.sendGeneralInfoUp} />
                <WorkExperienceContainer getDeletedJob={this.sendUpDeletedJob} onJobInfoSubmit={this.jobInfoAdd} onAddJob={this.addJobToArr}/>
                <EducationContainer getDeletedEdu={this.sendUpDeletedEdu} onEduInfoSubmit={this.eduInfoAdd} onAddEdu={this.addEduToArr}/>
            </div>
        )
    }
}

export default UserInput;
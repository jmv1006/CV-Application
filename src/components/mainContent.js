import React, { Component } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import '../styles/mainLayout.css'

class mainContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {name: '', email: '', phone: ''},
            jobs: [],
            counter: 0,
            jobsArr: []
        }

        this.sendGeneralInfoToChild = this.sendGeneralInfoToChild.bind(this)
        this.addJobToArr = this.addJobToArr.bind(this)
        this.getJobInformationFromChild = this.getJobInformationFromChild.bind(this)
        this.deleteAJob = this.deleteAJob.bind(this)
    }
    
    sendGeneralInfoToChild(name, email, phone) {
        this.setState({
            userInfo: {name: name, email: email, phone: phone}
        })
    }

    addJobToArr(job) {
        this.setState({
            jobs: this.state.jobs.concat(job),
        }, () => {
            this.setState({
                jobsArr: this.state.jobs
            })
        })
    }
    
    //gets job info from user input
    getJobInformationFromChild(job) {
        for(let i = 0; i < this.state.jobs; i++) {
            if(this.state.jobs[i].number === job.number) {
                this.state.jobs[i].title = job.title;
                this.state.jobs[i].company = job.company;
                this.state.jobs[i].years = job.years;
            }
        }
    }

    deleteAJob(arr) {
        const reducedArr = arr;
        this.setState({
            jobs: reducedArr,
        })
    }

   

    render() {
        return (
            <div id='mainContent'>
                <CvResult jobsArray = {this.state.jobsArr} name={this.state.userInfo.name} number={this.state.userInfo.phone} email={this.state.userInfo.email}/>
                <UserInput reflectDeletedJob={this.deleteAJob} getJobInfoInput={this.getJobInformationFromChild} onGeneralInfoSendUp={this.sendGeneralInfoToChild} sendJobUp={this.addJobToArr}/>
            </div>
        )
    }
}

export default mainContent;
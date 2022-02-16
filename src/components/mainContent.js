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
            jobsArr: [],
            educations: [],
            educationsArr: []
        }

        this.sendGeneralInfoToChild = this.sendGeneralInfoToChild.bind(this)
        this.addJobToArr = this.addJobToArr.bind(this)
        this.getJobInformationFromChild = this.getJobInformationFromChild.bind(this)
        this.deleteAJob = this.deleteAJob.bind(this)

        this.addEduToArr = this.addEduToArr.bind(this)
        this.getEduInformationFromChild = this.getEduInformationFromChild.bind(this)
        this.deleteAEdu = this.deleteAEdu.bind(this)
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
        for(let i = 0; i < this.state.jobs.length; i++) {
            if(this.state.jobs[i].number === job.number) {
                let jobs = this.state.jobs;
                let item = this.state.jobs[i];
                item.title = job.title;
                item.company = job.company;
                item.years = job.years;
                item.desc = job.desc;
                jobs[i] = item;

                this.setState({
                    jobs: jobs
                }, () => {
                    this.setState({
                        jobsArr: this.state.jobs
                    })
                })
            };
        };

    };

    deleteAJob(arr) {
        const reducedArr = arr;
        this.setState({
            jobs: reducedArr,
        }, () => {
            this.setState({
                jobsArr: this.state.jobs
            })
        })
    };

    ///////////////////////////////////////

    addEduToArr(edu) {
        this.setState({
            educations: this.state.educations.concat(edu),
        }, () => {
            this.setState({
                educationsArr: this.state.educations
            })
        })
    }

    getEduInformationFromChild(edu) {
        for(let i = 0; i < this.state.educations.length; i++) {
            if(this.state.educations[i].number === edu.number) {
                let edus = this.state.educations;
                let item = this.state.educations[i];
                item.school = edu.school;
                item.major = edu.major;
                item.gradYear = edu.gradYear;
                edus[i] = item;

                this.setState({
                    educations: edus
                }, () => {
                    this.setState({
                        educationsArr: this.state.educations
                    })
                })
            };
        };

    };

    deleteAEdu(arr) {
        const reducedArr = arr;
        this.setState({
            educations: reducedArr,
        }, () => {
            this.setState({
                educationsArr: this.state.educations
            })
        })
    };

   

    render() {
        return (
            <div id='mainContent'>
                <CvResult educationsArray = {this.state.educationsArr} jobsArray = {this.state.jobsArr} name={this.state.userInfo.name} number={this.state.userInfo.phone} email={this.state.userInfo.email}/>
                <UserInput  reflectDeletedEdu={this.deleteAEdu} reflectDeletedJob={this.deleteAJob} getJobInfoInput={this.getJobInformationFromChild} onGeneralInfoSendUp={this.sendGeneralInfoToChild} sendJobUp={this.addJobToArr} sendEduUp={this.addEduToArr} getEduInfoInput={this.getEduInformationFromChild}/>
            </div>
        )
    }
}

export default mainContent;
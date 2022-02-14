import React, { Component } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import '../styles/mainLayout.css'

class mainContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {name: '', email: '', phone: ''},
            jobs: []
        }

        this.sendGeneralInfoToChild = this.sendGeneralInfoToChild.bind(this)
        this.addJobToArr = this.addJobToArr.bind(this)
    }
    
    sendGeneralInfoToChild(name, email, phone) {
        this.setState({
            userInfo: {name: name, email: email, phone: phone}
        })
    }

    addJobToArr(job) {
        this.setState({
            jobs: this.state.jobs.concat(job)
        })
    }

    render() {
        return (
            <div id='mainContent'>
                <CvResult name = {this.state.userInfo.name} number={this.state.userInfo.phone} email={this.state.userInfo.email}/>
                <UserInput onGeneralInfoSendUp={this.sendGeneralInfoToChild} sendJobUp={this.addJobToArr}/>
            </div>
        )
    }
}

export default mainContent;
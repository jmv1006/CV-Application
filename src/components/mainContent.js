import React, { Component } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import '../styles/mainLayout.css'

class mainContent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0,
            userInfo: {name: '', email: '', phone: ''}
        }

        this.sendGeneralInfoToChild = this.sendGeneralInfoToChild.bind(this)
    }
    
    sendGeneralInfoToChild(name, email, phone) {
        this.setState({
            userInfo: {name: name, email: email, phone: phone}
        })
    }

    render() {
        return (
            <div id='mainContent'>
                <CvResult number={this.state.userInfo.phone}/>
                <UserInput onGeneralInfoSendUp={this.sendGeneralInfoToChild}/>
            </div>
        )
    }
}

export default mainContent;
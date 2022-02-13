import React, { Component } from "react";
import GeneralInfo from "./inputcomponents/general";
import WorkExperienceContainer from "./inputcomponents/workExperienceContainer";

class UserInput extends Component {
    constructor(props) {
        super(props);

        this.sendGeneralInfoUp = this.sendGeneralInfoUp.bind(this)
    }

    sendGeneralInfoUp(name, email, number) {
        this.props.onGeneralInfoSendUp(name, email, number)
    }

    render() {
        return(
            <div id='inputContainer'>
                <GeneralInfo onClick={this.sendGeneralInfoUp} />
                <WorkExperienceContainer />
            </div>
        )
    }
}

export default UserInput;
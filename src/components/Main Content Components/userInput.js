import React, { Component } from "react";
import GeneralInfo from "./inputcomponents/general";

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
            </div>
        )
    }
}

export default UserInput;
import React, { Component } from "react";
import '../styles/inputfields.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(item, value) {
        this.props.updateValue(item, value)
    }

    render() {
        return(
            <div id='generalContainer'>
                {/* Name */}
                <h1 id="sectionHeader">Personal Information</h1>
                <form id='generalForm'>
                    <input type="text" placeholder="Name" name="name" id='inputBox' value={this.props.name} onChange={(e) => this.updateValue('name', e.target.value)} />
                    <input type="email" placeholder="Email" name="email" id='inputBox' value={this.props.email} onChange={(e) => this.updateValue('email', e.target.value)} />
                    <input type="tel" placeholder='Phone Number' name="phoneNumber" id='inputBox' onChange={(e) => this.updateValue('number', e.target.value)}/>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;
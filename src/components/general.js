import React, { Component } from "react";
import '../styles/inputfields.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.handler(e.target.value)
    }

    render() {
        return(
            <div id='generalContainer'>
                {/* Name */}
                <h1 id="sectionHeader">Personal Information</h1>
                <form>
                    <input type="text" placeholder="Name" name="name" id='inputBox' value={this.props.name} onChange={this.handleChange} />
                </form>
                <form>
                    <input type="email" placeholder="Email" name="email" id='inputBox'/>
                </form>
                <form>
                    <input type="tel" placeholder='Phone Number' name="phoneNumber" id='inputBox'/>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;
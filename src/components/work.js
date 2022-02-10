import React, { Component } from "react";
import '../styles/inputfields.css'

class WorkExperience extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div id='workExperienceContainer'>
                <h1 id='sectionHeader'>Work Experience</h1>
                <form id='workForm'>
                    <input type="text" placeholder='Company Name' id='workInputBox' />
                    <input type="text" placeholder='Position' id='workInputBox' />
                    <input type="text" placeholder='Description' id='workInputBox' />
                    <input type="text" placeholder='Time Worked' id='workInputBox' />
                </form>
            </div>
        )
    }
}

export default WorkExperience;
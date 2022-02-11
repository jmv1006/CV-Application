import React, { Component } from "react";
import '../styles/inputfields.css'

class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(item, value) {
        this.props.updateValue(item, value)
    }

    render() {
        return(
            <div id='workExperienceContainer'>
                <h1 id='sectionHeader'>Work Experience</h1>
                <form id='workForm'>
                    <input type="text" placeholder='Company Name' id='workInputBox' value={this.props.company} onChange={(e) => this.updateValue('company', e.target.value)} />
                    <input type="text" placeholder='Position' id='workInputBox' value={this.props.jobtitle} onChange={(e) => this.updateValue('jobtitle', e.target.value)} />
                    <input type="text" placeholder='Description' id='workInputBox' value={this.props.description} onChange={(e) => this.updateValue('description', e.target.value)} />
                    <input type="text" placeholder='Time Worked' id='workInputBox' value={this.props.years} onChange={(e) => this.updateValue('years', e.target.value)}/>
                </form>
            </div>
        )
    }
}
//value={this.props.name} onChange={(e) => this.updateValue('name', e.target.value)}
export default WorkExperience;
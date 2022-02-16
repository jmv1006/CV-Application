import React, { Component } from "react";
import './inputmodule.css'
import EduInput from "./eduInput";

class EducationContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            educations: [],
            educationsNumber: 0
        }
        this.addNewEducationInput = this.addNewEducationInput.bind(this)
        this.saveEduInfoToState = this.saveEduInfoToState.bind(this)
        this.deleteEdu = this.deleteEdu.bind(this)
    }


    addNewEducationInput() {
        this.setState({
            educationsNumber: this.state.educationsNumber + 1,
            educations: this.state.educations.concat({number: this.state.educationsNumber})
        }, () => {
            const eduInputs = this.state.educations.map((edu) =>
             this.props.onAddEdu(edu)
            );
        })
    };

    saveEduInfoToState(school, major, gradYear, identifier) {
        for(let i = 0; i < this.state.educations.length; i++) {
            if(this.state.educations[i].number === identifier) {
                this.state.educations[i].school = school;
                this.state.educations[i].major = major;
                this.state.educations[i].gradYear = gradYear;
                this.props.onEduInfoSubmit(this.state.educations[i])
            }
        }
    }

    deleteEdu(identifier) {
        for(let i = 0; i < this.state.educations.length; i++) {
            if(this.state.educations[i].number === identifier) {
               const reducedArr = this.state.educations;
               reducedArr.splice(i, 1);
               this.setState({
                   educations: reducedArr,
               })
               this.props.getDeletedEdu(this.state.educations)
            }
        }
    }


    render() {
        const eduInputs = this.state.educations.map((edu, index) =>
            <EduInput  getDeletionNotification={this.deleteEdu} sendUpEduInfo={this.saveEduInfoToState} key={this.state.educations[index].number} identifier={this.state.educations[index].number}/>
        )

        return(
            <div id='educationInputContainer'>
                <h1>Education</h1>
                {/*input stuff*/}
                {eduInputs}
                <button onClick={this.addNewEducationInput}>Add</button>
            </div>
        )
    }
}

export default EducationContainer;
import React, { Component } from "react";
import './inputmodule.css'

class EduInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: '',
            major: '',
            gradYear: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendUpEduInfo = this.sendUpEduInfo.bind(this)
        this.notifyParentOfDeletion = this.notifyParentOfDeletion.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    sendUpEduInfo(e) {
        e.preventDefault();
        this.props.sendUpEduInfo(this.state.school, this.state.major, this.state.gradYear, this.props.identifier)
    }

    notifyParentOfDeletion(e) {
        e.preventDefault();
        this.props.getDeletionNotification(this.props.identifier)
    }

    render() {
        return(
            <div className='inputBoxContainer'>
                <form className='formClass'>
                    <input type="text" name="school" onChange={this.handleChange} value = {this.state.school} placeholder={'School'} ></input>
                    <input type="text" name="major" onChange={this.handleChange} value = {this.state.major} placeholder={'Major/Area of Study'}></input>
                    <input type="text" name="gradYear" onChange={this.handleChange} value = {this.state.gradYear} placeholder={'Graduation Year'}></input>
                    <button onClick={this.notifyParentOfDeletion}>Delete Education</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EduInput;
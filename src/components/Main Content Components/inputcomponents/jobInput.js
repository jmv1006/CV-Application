import React, { Component } from "react";


class JobInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: '',
            years: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.sendUpJobInfo = this.sendUpJobInfo.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    sendUpJobInfo(e) {
        e.preventDefault();
        this.props.sendUpJobInfo(this.state.title, this.state.company, this.state.years, this.props.identifier)
    }

    render() {
        return (
            <div className='inputBoxContainer'>
                <form onSubmit={this.sendUpJobInfo} className='formClass'>
                    <input type="text" name="title" onChange={this.handleChange} value = {this.state.title} placeholder={'Job Title'} ></input>
                    <input type="text" name="company" onChange={this.handleChange} value = {this.state.company} placeholder={'Company'}></input>
                    <input type="text" name="years" onChange={this.handleChange} value = {this.state.years} placeholder={'Years'}></input>
                    <button></button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default JobInput;
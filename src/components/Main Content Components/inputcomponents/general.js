import React, { Component } from "react";
import '../inputcomponents/inputmodule.css'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick(e) {
        e.preventDefault();
        let val1 = this.state.name;
        let val3 = this.state.number;
        let val2 = this.state.email;
        this.props.onClick(val1, val2, val3)
    }

    render() {
        return(
            <div className='inputBoxContainer'>
                <h1>{'General Info'}</h1>
                <form onSubmit={this.onClick} className='formClass'>
                    <input type="text" placeholder={'Name'} onChange={this.handleChange} value={this.state.name} name='name'></input>
                    <input type="text" placeholder={'Email'} onChange={this.handleChange} value={this.state.email} name='email'></input>
                    <input type="text" placeholder={'Phone Number'} onChange={this.handleChange} value={this.state.number} name='number'></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;
import React, { Component } from "react";
import './inputmodule.css'

class WorkExperienceContainer extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return(
            <div id='workExperienceContainer'>
                <h1>Work Experience</h1>
                <button>Add</button>
                {/* each job wil have its own input that goes here*/}
            </div>
        )
    }
}

export default WorkExperienceContainer;

/*
 <div class='inputBoxContainer'>
                <h1>{'Work Experience'}</h1>
                <form className='formClass'>
                    <input type="text" placeholder={'Job Title'} ></input>
                    <input type="text" placeholder={'Company'}></input>
                    <input type="text" placeholder={'Years'} ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        */
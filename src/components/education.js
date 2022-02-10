import React, { Component } from "react";
import '../styles/inputfields.css'

class Education extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div id='educationContainer'>
                <h1 id='sectionHeader'>Education</h1>
                <form id='educationForm'>
                    <input type="text" placeholder='School Name' id='educationInputBox' />
                    <input type="text" placeholder='Major/Area Of Study' id='educationInputBox' />
                    <input type="text" placeholder='Graduation Year' id='educationInputBox' />
                </form>
            </div>
        )
    }
}

export default Education;
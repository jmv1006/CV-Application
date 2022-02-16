import React, { Component } from "react";
import './cvModule.css'

class EduDisplay extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
       return(
           <div className="eduDisplay">
               <div id='eduSchool'>{this.props.school}</div>
               <div id='eduMajor'>{this.props.major}</div>
               <div id='eduGradYear'>{this.props.gradYear}</div>
           </div>
       )
        
    }
}

export default EduDisplay;
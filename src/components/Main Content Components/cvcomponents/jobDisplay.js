import React, { Component } from "react";
import './cvModule.css'

class JobDisplay extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
       return(
           <div className="jobDisplay">
               <div id='jobTitle'>{this.props.title}</div>
               <div id='companyName'>{this.props.company}</div>
               <div id='years'>{this.props.years}</div>
           </div>
       )
        
    }
}

export default JobDisplay;
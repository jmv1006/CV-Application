import React, { Component } from "react";
import './cvModule.css'

const JobExperienceBox = (props) => {
    return(
        <div id="cvJobBox">
            <div id='jobTitle'>{props.title}</div>
            <div id='jobCompany'>{props.company}</div>
            <div id='jobDates'>{props.startDate} -- {props.endDate}</div>
            <div id='jobDesc'>{props.desc}</div>
        </div>
    );
};

export default JobExperienceBox;
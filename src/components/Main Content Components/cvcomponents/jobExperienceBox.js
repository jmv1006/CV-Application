import React, { Component } from "react";
import './cvModule.css'

const JobExperienceBox = (props) => {
    return(
        <div className="cvBox">
            <div className="jobAndSchoolName">{props.title}</div>
            <div className="subText">{props.company}</div>
            <div className="subText">{props.startDate} -- {props.endDate}</div>
            <div className="subText">{props.desc}</div>
        </div>
    );
};

export default JobExperienceBox;
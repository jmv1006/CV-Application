import React, { Component } from "react";
import './cvModule.css'

const EducationBox = (props) => {
    return(
        <div className="cvBox">
            <div className="jobAndSchoolName">{props.school}</div>
            <div className="subText">{props.major}</div>
            <div className="subText">{props.startDate} -- {props.endDate}</div>
        </div>
    );
};

export default EducationBox;
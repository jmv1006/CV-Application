import React, { Component } from "react";
import './cvModule.css'

const CvExperience = ({children}) => {
    return(
        <div id="cvExperienceContainer">
            {children}
        </div>
    );
};

export default CvExperience;
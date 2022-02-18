import React, { Component } from "react";
import './cvModule.css'

const CvEducation = ({children}) => {
    return(
        <div className="cvContainer">
            {children}
        </div>
    );
};

export default CvEducation;
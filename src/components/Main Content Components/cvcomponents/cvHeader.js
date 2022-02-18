import React, { Component } from "react";
import './cvModule.css'

const CVHeader = ({children}) => {
    return(
        <div id="cvHeaderContainer">
            {children}
        </div>
    );
};

export default CVHeader;
import React, { useState } from "react";
import './cvcomponents/cvModule.css'


const CvResult = ({children}) => {
    return(
        <div id='cvContainer'>
            <div id='generatedCV'>
                {children}
            </div>
        </div>
    )
}

export default CvResult;
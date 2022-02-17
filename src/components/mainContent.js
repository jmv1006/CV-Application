import React, { useState } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import '../styles/mainLayout.css'

const mainContent = () => {

    return(
        <div id='mainContent'>
            <CvResult />
            <UserInput />
        </div>
    )
}

export default mainContent;
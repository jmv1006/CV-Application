import React, { useState, useContext, useEffect } from "react";
import './inputcomponents/inputmodule.css'

const UserInput = ({children}) => {
    return(
        <div id='inputContainer'>
             {children}
        </div>
    )
}

export default UserInput;
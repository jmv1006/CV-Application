import React, { useState, useContext, useEffect } from "react";
import './inputmodule.css'

const GeneralInformationInput = (props) => {



    return(
        <div id='generalInfoContainer'>
            <div className='inputHeader'>General Info</div>
            <form className='formClass'>
                <input value={props.personName} onChange={props.handleChangeGeneral} name='personName' type='text' placeholder="Name"></input>
                <input value={props.phone} onChange={props.handleChangeGeneral} name='phone' type='text' placeholder="Phone"></input>
                <input value={props.email} onChange={props.handleChangeGeneral} name='email' type='text' placeholder="Email"></input>
            </form>
        </div>
    )
}

export default GeneralInformationInput;
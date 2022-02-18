import React, { useState, useEffect } from "react";
import './inputmodule.css'

const EducationInput = (props) => {

    const [education, setEducation] = useState({
        school: '',
        major: '',
        startDate: '',
        endDate: '',
        number: props.number
    });

    const handleChangeEdu = (e) => {
        e.preventDefault();
        setEducation((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const deleteEdu = (e) => {
        e.preventDefault();
        props.deleteEdu(education.number)
    };

    const submit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        props.updateEduValues(education)
    }, [education])


    return(
        <div className="inputFormContainer">
            <form className='formClass'>
                <input value={education.school} onChange={handleChangeEdu} id={props.number} name='school' type='text' placeholder="School"></input>
                <input value={education.major} onChange={handleChangeEdu} id={props.number} name='major' type='text' placeholder="Major"></input>
                <label htmlFor="startDate">Start date:</label>
                <input value={education.startDate} onChange={handleChangeEdu} id={props.number} type='date' name='startDate'></input>
                <label htmlFor="endDate">End date:</label>
                <input value={education.endDate} onChange={handleChangeEdu} id={props.number} type='date' name='endDate'></input>
                <button onClick={deleteEdu}>Delete</button>
            </form>
        </div>
    )
}

export default EducationInput;
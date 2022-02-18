import React, { useState, useEffect } from "react";
import './inputmodule.css'

const WorkExperienceInput = (props) => {

    const [job, setJob] = useState({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        desc: '',
        number: props.number
    });

    const handleChangeJobs = (e) => {
        e.preventDefault();
        setJob((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const deleteJob = (e) => {
        e.preventDefault();
        props.deleteJob(job.number)
    };

    useEffect(() => {
        props.updateJobValues(job)
    }, [job])


    return(
        <div className="inputFormContainer">
            <form className='formClass'>
                <input value={job.title} onChange={handleChangeJobs} id={props.number} name='title' type='text' placeholder="Job Title"></input>
                <input value={job.company} onChange={handleChangeJobs} id={props.number} name='company' type='text' placeholder="Company"></input>
                <label htmlFor="startDate">Start date:</label>
                <input value={job.startDate} onChange={handleChangeJobs} id={props.number} type='date' name='startDate'></input>
                <label htmlFor="endDate">End date:</label>
                <input value={job.endDate} onChange={handleChangeJobs} id={props.number} type='date' name='endDate'></input>
                <input value={job.desc} onChange={handleChangeJobs} id={props.number} name='desc' type='text' placeholder="Description"></input>
                <button onClick={deleteJob}>Delete</button>
            </form>
        </div>
    )
}

export default WorkExperienceInput;
import React, { useState, useEffect } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import '../styles/mainLayout.css'
import GeneralInformationInput from "./Main Content Components/inputcomponents/general";
import WorkExperienceInput from "./Main Content Components/inputcomponents/workExperience";


const MainContent = () => {

    const [generalInfo, setgeneralInfo] = useState({
        personName: '',
        email: '',
        phone: ''
    })

    const [jobs, setJobs] = useState([]);

    const [jobCounter, setJobCounter] = useState(0);


    //handle general info stuff
    const handleChangeGeneral = (e) => {
        e.preventDefault();
        setgeneralInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    //handle job stuff
    const addJob = () => {
        setJobCounter(jobCounter + 1)
        let newJob = {title: '', company: '', startDate: '', endDate: '', desc: '', number: jobCounter }
        setJobs(jobs.concat(newJob))
    }

    const updateJobValues = (obj) => {
        for(let i = 0; i < jobs.length; i++) {
            if(jobs[i].number === obj.number) {
                jobs[i].title = obj.title;
                jobs[i].company = obj.company;
                jobs[i].startDate = obj.startDate;
                jobs[i].endDate = obj.endDate;
                jobs[i].desc = obj.desc;
            }
        }
    };

    const deleteAJob = (number) => {
        setJobs(jobs.filter(job => job.number !== number))
    };



    const jobInputs = jobs.map((job, index) => 
            <WorkExperienceInput deleteJob={deleteAJob} updateJobValues={updateJobValues} key={job.number} number={job.number} jobs={jobs}/>
    );



    return(
        <div id='mainContent'>
            <CvResult>
                Dog
            </CvResult>
            <UserInput>
                <GeneralInformationInput name={generalInfo.name} phone={generalInfo.phone} email={generalInfo.email} handleChangeGeneral={handleChangeGeneral}/>
                <div className='inputHeader'>Work Experience</div>
                {jobInputs}
                <button onClick={addJob}>Add Job</button>
            </UserInput>
        </div> 
    )
}

export default MainContent;
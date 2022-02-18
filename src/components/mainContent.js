import React, { useState, useEffect } from "react";
import UserInput from "./Main Content Components/userInput";
import CvResult from "./Main Content Components/cvResult";
import GeneralInformationInput from "./Main Content Components/inputcomponents/general";
import WorkExperienceInput from "./Main Content Components/inputcomponents/workExperience";
import CVHeader from "./Main Content Components/cvcomponents/cvHeader";
import CvExperience from "./Main Content Components/cvcomponents/cvExperience";
import JobExperienceBox from "./Main Content Components/cvcomponents/jobExperienceBox";
import EducationInput from "./Main Content Components/inputcomponents/educationInput";
import CvEducation from "./Main Content Components/cvcomponents/cvEducation";
import EducationBox from "./Main Content Components/cvcomponents/educationBox";
import '../styles/mainLayout.css'
import './Main Content Components/cvcomponents/cvModule.css'

const MainContent = () => {

    const [generalInfo, setgeneralInfo] = useState({
        personName: '',
        email: '',
        phone: ''
    })

    //value that I add to in order to re-render stuff live
    const [value, setValue] = useState(0)

    //array of jobs 
    const [jobs, setJobs] = useState([]);

    //counter that gives each job object an assigned "number" 
    const [jobCounter, setJobCounter] = useState(0);
    
    //array of education
    const [educations, setEducations] = useState([]);

    //counter that gives each education object an assigned "number"
    const [educationCounter, setEducationCounter] = useState(0);


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
        setValue(value + 1);
    };

    const deleteAJob = (number) => {
        setJobs(jobs.filter(job => job.number !== number))
    };

    let jobInputs = jobs.map((job, index) => 
         <WorkExperienceInput deleteJob={deleteAJob} updateJobValues={updateJobValues} key={job.number} number={job.number} jobs={jobs}/>
    );

    let jobsToDisplay = jobs.map((job, index) => 
        <JobExperienceBox key={job.number} title={job.title} company={job.company}  startDate={job.startDate}  endDate={job.endDate}  desc={job.desc}/>
    );
    

    //handle education stuff
    const addEducation = () => {
        setEducationCounter(educationCounter + 1)
        let newEducation = {school: '', major: '', startDate: '', endDate: '',  number: educationCounter }
        setEducations(educations.concat(newEducation))
    };

    const updateEduValues = (obj) => {
        for(let i = 0; i < educations.length; i++) {
            if(educations[i].number === obj.number) {
                educations[i].school = obj.school;
                educations[i].major = obj.major;
                educations[i].startDate = obj.startDate;
                educations[i].endDate = obj.endDate;
            }
        }
        setValue(value + 1);
    };


    const deleteAEdu = (number) => {
        setEducations(educations.filter(edu => edu.number !== number))
    };

    let educationInputs = educations.map((education, index) => 
        <EducationInput deleteEdu={deleteAEdu} updateEduValues={updateEduValues} key={education.number} number={education.number} educations={educations}/>
    )

    let eduToDisplay = educations.map((education, index) => 
        <EducationBox key={education.number} school={education.school} major={education.major}  startDate={education.startDate}  endDate={education.endDate} />
    );


    return(
        <div id='mainContent'>
            <CvResult>
                <CVHeader>
                    <div id='cvName'>[{generalInfo.personName}]</div>
                    <div id='cvRightSide'>
                        <div><span class='blueText'>phone: </span>{generalInfo.phone}</div>
                        <div><span class='blueText'>email: </span>{generalInfo.email}</div>
                    </div>
                </CVHeader>
                <CvExperience>
                    <div class='cvSectionHeader'>Experience</div>
                    {jobsToDisplay}
                </CvExperience>
                <CvEducation>
                    <div class='cvSectionHeader'>Education</div>
                    {eduToDisplay}
                </CvEducation>
            </CvResult>
            <UserInput>
                <GeneralInformationInput name={generalInfo.name} phone={generalInfo.phone} email={generalInfo.email} handleChangeGeneral={handleChangeGeneral}/>
                <div className="inputContainer">
                    <div className='inputHeader'>Work Experience</div>
                    {jobInputs}
                    <button onClick={addJob}>Add Job</button>
                </div>
                <div className="inputContainer">
                    <div className="inputHeader">Education Experience</div>
                    {educationInputs}
                    <button onClick={addEducation}>Add</button>
                </div>
            </UserInput>
        </div> 
    )
}

export default MainContent;
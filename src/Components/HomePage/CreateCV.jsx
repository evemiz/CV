import React, { useState, useEffect, useRef } from "react";
import Template1 from "../CVTemplates/Template1Components/Template1";
import html2pdf from "html2pdf.js";
import CVForm from "../Form/CVForm";

function CreateCV({ t }) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [close, setClose] = useState(false);
    const resumeRef = useRef(null);
    const [name, setName] = useState("");
    const [links, setLinks] = useState({});
    const [skills, setSkills] = useState([]);
    const [about, setAbout] = useState({title: "", content: ""});
    const [experience, setExperience] = useState({title: "", arr: []});
    const [education, setEducation] = useState({title: "", arr: []});
    const [volunteering, setVolunteering] = useState({title: "", arr: []});
    const [projects, setProjects] = useState({title: "", arr: []});
    const [hobbies, setHobbies] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [stepNum, setStepNum] = useState(1);

    useEffect(() => {
        const checkOverflow = () => {
            if (resumeRef.current) {
                setIsOverflowing(resumeRef.current.scrollHeight > resumeRef.current.clientHeight);
            }
        };
    
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
    
        return () => window.removeEventListener("resize", checkOverflow);
    }, [name, links, skills, about, experience, education, volunteering, projects, languages]);

    const generatePDF = () => {
        const element = document.getElementById("template-content");

        const opt = {
            margin:       0,  
            filename:     'cv.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 }, 
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
    };

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col user-form">
                        <CVForm 
                            name={name}
                            setName={setName}
                            links={links}
                            setLinks={setLinks}
                            skills={skills}
                            setSkills={setSkills}
                            about={about}
                            setAbout={setAbout}
                            experience={experience}
                            setExperience={setExperience}
                            education={education}
                            setEducation={setEducation}
                            volunteering={volunteering}
                            setVolunteering={setVolunteering}
                            projects={projects}
                            setProjects={setProjects}
                            hobbies={hobbies}
                            setHobbies={setHobbies}
                            languages={languages}
                            setLanguages={setLanguages}
                            generatePDF={generatePDF}
                            stepNum={stepNum}
                            setStepNum={setStepNum}
                            t={t}
                        />
                    </div>
                    <div className="col">
                            <div className="template-container">
                            <div id="template-content">
                                <Template1 
                                    resumeRef={resumeRef}
                                    name={name}
                                    links={links}
                                    skills={skills}
                                    about={about}
                                    experience={experience}
                                    education={education}
                                    volunteering={volunteering}
                                    projects={projects}
                                    hobbies={hobbies}
                                    languages={languages}
                                    stepNum={stepNum}
                                    t={t}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOverflowing && !close &&(
                <div className="overflow-warning">
                    <button className="btn-close" onClick={() => setClose(true)}></button>
                    <div className="text-center px-5">
                        <p>{t('attention_text')}</p>
                        <p>{t('resume_warning')}</p>
                    </div>
                </div>
                
            )}
        </>
        
    );
};

export default CreateCV;

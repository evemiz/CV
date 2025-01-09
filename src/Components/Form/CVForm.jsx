import React, { useState } from "react";
import '../../../public/CVForm.css';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import NextSteps from "./NextSteps";
import LanguagesStep from "./LanguagesStep";
import { experienceText, educationText, volunteeringText, projectsText, languagesText } from "./NextStepsText";

function CVForm({
    name,
    setName,
    links,
    setLinks,
    skills, 
    setSkills,
    about,
    setAbout, 
    experience,
    setExperience,
    education, 
    setEducation,
    volunteering,
    setVolunteering,
    projects,
    setProjects,
    languages,
    setLanguages
}) {
    const [stepNum, setStepNum] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <h1 className="my-5 text-center">Let's Create Your Stunning Resume ✨</h1>
            <form onSubmit={handleSubmit} className="form-container">
                {stepNum == 1 && 
                    <FirstStep 
                        name={name}
                        setName={setName}
                        links={links}
                        setLinks={setLinks}
                    />
                }
                {stepNum == 2 && 
                    <SecondStep 
                        skills={skills}
                        setSkills={setSkills}
                    />
                }

                {stepNum == 3 && 
                    <ThirdStep
                        about={about}
                        setAbout={setAbout}
                    />
                }
                
                {stepNum == 4 && 
                    <NextSteps 
                        items={experience}
                        setItems={setExperience}
                        secName={experienceText}
                        sectio
                    />
                }

                {stepNum === 5 && 
                    <NextSteps 
                        items={education}
                        setItems={setEducation}
                        secName={educationText}
                    />
                }

                {stepNum === 6 && 
                    <NextSteps 
                        items={volunteering}
                        setItems={setVolunteering}
                        secName={volunteeringText}
                    />
                }

                {stepNum === 7 && 
                    <NextSteps 
                        items={projects}
                        setItems={setProjects}
                        secName={projectsText}
                    />
                }

                {stepNum === 8 && 
                    <LanguagesStep 
                        languages={languages}
                        setLanguages={setLanguages}
                    />
                }
            </form>

            <div className="btn-group my-5" role="group">
                {stepNum > 1 && 
                    <button type="button" className="btn btn-outline-primary" onClick={() => setStepNum(stepNum - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </button>
                }
                {stepNum < 10 && 
                    <button type="button" className="btn btn-outline-primary" onClick={() => setStepNum(stepNum + 1)}>Next Step  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                }

            </div>
        </div>
    );
};

export default CVForm;

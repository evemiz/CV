import React, { useState } from "react";
import '../../../public/CVForm.css';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import NextSteps from "./NextSteps";
import ListStep from "./ListStep";
import { experienceText, educationText, volunteeringText, projectsText, languagesText, hobbiesText } from "./NextStepsText";

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
    hobbies,
    setHobbies,
    languages,
    setLanguages,
    generatePDF
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
                    <ListStep 
                        items={hobbies}
                        setItems={setHobbies}
                        text={hobbiesText}
                    />
                }

                {stepNum === 9 && 
                    <ListStep 
                        items={languages}
                        setItems={setLanguages}
                        text={languagesText}
                    />
                }

                {stepNum === 10 && 
                    <div className="mt-3">
                    <h2>Congratulations on completing your CV!</h2>
                    <p>You've successfully filled out all the sections. If you're happy with the result, you can download your CV as a PDF. If you wish to make changes, feel free to go back to any section and update your details.</p>
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                        <button onClick={generatePDF} className="btn btn-outline-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
                            </svg>
                            Download PDF
                        </button>
                    </div>
                    </div>
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

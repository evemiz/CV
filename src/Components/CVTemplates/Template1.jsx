import React from "react";
import '../../../public/templates.css'
import Title from "./Template1Components/Title";
import Links from "./Template1Components/Links"
import Skills from "./Template1Components/Skills";
import Section from "./Template1Components/Section";
import SectionWithList from "./Template1Components/SectionWithList";

function Template1({ 
    resumeRef,
    name,
    links
}) {
    return (
        <>
            <div className="resume" ref={resumeRef}>
                <div className="container-fluid">
                    <div className="col">

                        <div className="row gap-5 grey-bg-color p-3">
                            <Title name={name}/>
                            <Links 
                                content={Object.values(links)} 
                                icons={Object.keys(links)}
                            />
                        </div>
                        
                        <Skills 
                            content = {["React", "Node.js", "Python", "ML", "HTML5", "CSS3", "JavaScript", "Java", "C", "C++", "PowerShell"]}
                        />

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*About Me*/}
                        <Section 
                            title = "About Me"
                            subTitles = {[""]}
                            years = {[""]}
                            paragraphs = {["Fourth-year software engineering honor student, currently working at the IT Support Center of the Ministry of Transport, with military service experience in network management. Possessing a strong work ethic and known as a collaborative team player, I am actively seeking a junior role in software engineering. Enthusiastic about contributing, learning, and thriving in a diverse and challenging environment. Committed to excellence and driven to succeed."]} 
                        />
                        
                        <div className="row mx-3 mt-3"><hr /></div>
                        
                        {/*Professional Experience*/}
                        <Section 
                            title = "Professional Experience"
                            subTitles = {["IT Support Center (Student Position)"]}
                            years = {["Present"]}
                            paragraphs = {["Working at the IT Support Center within the Ministry of Transport, my role covers all essential IT functions, including user support, system maintenance, and troubleshooting. Additionally, I am involved in a project to develop an IT platform that integrates various support operations. The platform's backend is powered by PowerShell scripts to handle tasks such as retrieving user and computer details, remote management, and system shutdowns without direct connection. The frontend is built using React to create a user-friendly interface for managing support tasks."]} 
                        />

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*Education*/}
                        <Section 
                            title = "Education"
                            subTitles = {["B.Sc. in Software Engineering (expected: 2025)", "Key Courses:"]}
                            years = {["2021 - Present", ""]}
                            paragraphs = {["Azrieli College of Engineering, Jerusalem, Israel.\nGPA: 92.27\nRecipient of the First-Year Academic Excellence Award.", "Operating Systems (Grade: 90) | C and C++ Programming (Grade: 94) | Introduction to Machine Learning (Grade: 95) | Algorithmic (Grade: 98) | Computer Networking (Grade: 95)."]} 
                        />

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*Volunteering*/}
                        <Section 
                            title = "Volunteering"
                            subTitles = {["Perach - A National Program for Social ImpactPerach - A National Program for Social Impact"]}
                            years = {["2021 - Present"]}
                            paragraphs = {["Perach - A National Program for Social ImpactPerach - A National Program for Social Impact"]} 
                        />
                        <SectionWithList 
                            subTitle="Responsibilities:"
                            items={["Offered guidance and assistance to help students navigate academic challenges and adjust to university life.", "Demonstrated a commitment to the academic success and well-being of first-year students."]}
                        />

                        <div className="row mx-3 mt-1"><hr /></div>

                        {/*Languages*/}
                        <SectionWithList 
                            title="Languages:"
                            items={["Hebrew- native", "English – fluent"]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template1;

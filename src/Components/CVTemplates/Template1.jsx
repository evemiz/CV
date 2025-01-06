import React from "react";
import '../../../public/templates.css'

function Template1() {
    return (
        <>
            <div className="resume my-5">
                <div className="container-fluid">
                    <div className="col">

                        <div className="row gap-5 grey-bg-color p-3">
                            {/*Title*/}
                            <div className="col text-center d-flex flex-column justify-content-center">
                                <h1 className="title-size m-0 p-0">Eve Ben Yeshaya</h1>
                            </div>
                            {/*Links*/}
                            <div className="col d-flex flex-column justify-content-center">
                                <div className="row p-0 mt-1">
                                    <div className="d-flex align-items-center">
                                        <div className="circle me-2 p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                            </svg>
                                        </div> 
                                        <span className="" style={{ whiteSpace: 'nowrap' }}>050-000-1111</span>
                                    </div>
                                </div>
                                <div className="row p-0 mt-1">
                                    <div className="d-flex align-items-center">
                                        <div className="circle me-2 p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                        </svg>
                                        </div> 
                                        <span className="" style={{ whiteSpace: 'nowrap' }}>eve@gmail.com </span>
                                    </div>
                                </div>
                                <div className="row p-0 mt-1">
                                    <div className="d-flex align-items-center">
                                        <div className="circle me-2 p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                        </svg>
                                        </div> 
                                        <span className="" style={{ whiteSpace: 'nowrap' }}>https://github.com/evemiz</span>
                                    </div>
                                </div>
                                <div className="row p-0 mt-1">
                                    <div className="d-flex align-items-center">
                                        <div className="circle me-2 p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                        </svg>
                                        </div> 
                                        <span className="" style={{ whiteSpace: 'nowrap' }}>www.linkedin.com/in/evebenyeshaya</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Skills*/}
                        <div className="row gap-5 d-flex align-items-start justify-content-center mt-4">
                            <div className="col-auto">
                                <div className="row ms-4 d-flex align-items-start p-0">
                                    <div className="sub-title-size p-0">Skills</div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row me-4 p-0 gap-2 d-flex justify-content-center">
                                    <div className="col-auto skills-bg"><span>React</span></div>
                                    <div className="col-auto skills-bg"><span>Node.js</span></div>
                                    <div className="col-auto skills-bg"><span>Python</span></div>
                                    <div className="col-auto skills-bg"><span>ML</span></div>
                                    <div className="col-auto skills-bg"><span>HTML5</span></div>
                                    <div className="col-auto skills-bg"><span>CSS3</span></div>
                                    <div className="col-auto skills-bg"><span>JavaScript</span></div>
                                    <div className="col-auto skills-bg"><span>Java</span></div>
                                    <div className="col-auto skills-bg"><span>C</span></div>
                                    <div className="col-auto skills-bg"><span>C++</span></div>
                                    <div className="col-auto skills-bg"><span>PowerShell</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*About Me*/}
                        <div className="row ms-4">
                            <div className="sub-title-size p-0">About Me</div>
                        </div>
                        <div className="row mx-4 p-0 mt-1">
                            <p className="p-0 m-0">Fourth-year software engineering honor student, currently working at the IT Support Center of the Ministry of Transport, with military service experience in network management. Possessing a strong work ethic and known as a collaborative team player, I am actively seeking a junior role in software engineering. Enthusiastic about contributing, learning, and thriving in a diverse and challenging environment. Committed to excellence and driven to succeed.</p>
                        </div>
                        
                        <div className="row mx-3 mt-3"><hr /></div>
                        
                        {/*Professional Experience*/}
                        <div className="row ms-4">
                            <div className="sub-title-size p-0">Professional Experience</div>
                        </div>
                        <div className="row ms-4">
                            <div className="col p-0 m-0">
                                <div className="second-sub-title-size p-0 my-1">IT Support Center (Student Position)</div>
                            </div>
                            <div className="col-auto p-0 m-0">
                                <div className="second-sub-title-size px-2 my-1 me-4 skills-bg">Present</div>
                            </div>
                            
                        </div>
                        <div className="row mx-4 p-0">
                            <p className="p-0 m-0">Working at the IT Support Center within the Ministry of Transport, my role covers all essential IT functions, including user support, system maintenance, and troubleshooting. Additionally, I am involved in a project to develop an IT platform that integrates various support operations. The platform's backend is powered by PowerShell scripts to handle tasks such as retrieving user and computer details, remote management, and system shutdowns without direct connection. The frontend is built using React to create a user-friendly interface for managing support tasks.</p>
                        </div>
                        {/* <div className="row ms-4">
                            <div className="second-sub-title-size p-0 my-1">Responsibilities:</div>
                        </div>
                        <div className="row mx-5 p-0">
                            <ul>
                                <li>User account management in Active Directory.</li>
                                <li>Printer setup/troubleshooting.</li>
                                <li>Support for office systems, including Microsoft Office.</li>
                                <li>Software installation/configuration.</li>
                                <li>Basic network troubleshooting.</li>
                                <li>Remote technical support.</li>
                            </ul>
                        </div> */}

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*Education*/}
                        <div className="row ms-4">
                            <div className="sub-title-size p-0">Education</div>
                        </div>
                        <div className="row ms-4">
                            <div className="col p-0 m-0">
                                <div className="second-sub-title-size p-0 mt-1">B.Sc. in Software Engineering (expected: 2025)</div>
                            </div>
                            <div className="col-auto p-0 m-0">
                                <div className="second-sub-title-size px-2 mt-1 me-4 skills-bg">2021 - Present</div>
                            </div>
                            
                        </div>
                        <div className="row mx-4 p-0">
                            <p className="p-0 m-0">Azrieli College of Engineering, Jerusalem, Israel.</p>
                            <p className="p-0 m-0">GPA: 92.27</p>
                            <p className="p-0 m-0">Recipient of the First-Year Academic Excellence Award.</p>
                        </div>
                        <div className="row ms-4">
                            <div className="second-sub-title-size p-0 mt-1">Key Courses:</div>
                        </div>
                        <div className="row mx-4 p-0">
                            <p className="p-0 m-0">Operating Systems (Grade: 90) | C and C++ Programming (Grade: 94) | Introduction to Machine Learning (Grade: 95) | Algorithmic (Grade: 98) | Computer Networking (Grade: 95).</p>
                        </div>

                        <div className="row mx-3 mt-3"><hr /></div>

                        {/*Volunteering*/}
                        <div className="row ms-4">
                            <div className="sub-title-size p-0">Volunteering</div>
                        </div>
                        <div className="row ms-4">
                            <div className="col p-0 m-0">
                                <div className="second-sub-title-size p-0 mt-1">Perach - A National Program for Social ImpactPerach - A National Program for Social Impact</div>
                            </div>
                        </div>
                        <div className="row mx-4 p-0">
                            <p className="p-0 m-0">Participated in the Perach scholarship, providing mentoring support to first-year students across various courses.</p>
                        </div>
                        <div className="row ms-4">
                            <div className="second-sub-title-size p-0 mt-1">Responsibilities:</div>
                        </div>
                        <div className="row me-4 ms-5 p-0">
                            <ul>
                                <li>Offered guidance and assistance to help students navigate academic challenges and adjust to university life.</li>
                                <li>Demonstrated a commitment to the academic success and well-being of first-year students.</li>
                            </ul>
                        </div>

                        <div className="row mx-3 mt-1"><hr /></div>

                        {/*Languages*/}
                        <div className="row ms-4">
                            <div className="sub-title-size p-0">Languages</div>
                        </div>
                        <div className="row mt-1 me-4 ms-5 p-0">
                            <ul>
                                <li>Hebrew- native</li>
                                <li>English – fluent</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Template1;
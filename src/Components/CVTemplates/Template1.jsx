import React from "react";
import '../../../public/templates.css'
import Title from "./Template1Components/Title";
import Links from "./Template1Components/Links"
import Skills from "./Template1Components/Skills";
import Section from "./Template1Components/Section";
import SectionWithList from "./Template1Components/SectionWithList";
import Hobbies from "./Template1Components/Hobbies";

function Template1({ 
    resumeRef,
    name,
    links,
    skills, 
    about,
    experience,
    education, 
    volunteering,
    projects,
    hobbies,
    languages,
    t
}) {
    return (
        <>
            <div className="resume" ref={resumeRef}>
                <div className="container-fluid">
                    <div className="col">

                        <div className="row gap-5 grey-bg-color p-3 mb-3">
                            <Title name={name}/>
                            <Links 
                                content={Object.values(links)} 
                                icons={Object.keys(links)}
                            />
                        </div>
                        {skills.length > 0 && 
                        <>
                            <Skills content = {skills} t={t}/>
                            <div className="row mx-3 mt-3"><hr /></div>    
                        </>
                        }
                        {(about.content.length > 0 || about.title.length > 0) && 
                        <>
                            <Section 
                                title = {[about.title]}
                                subTitles = {[""]}
                                years = {[""]}
                                paragraphs = {[about.content]}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {(experience.title || experience.arr.length > 0) && 
                        <>
                            <Section 
                                title={experience.title}
                                subTitles={experience.arr.map((i) => i.title)} 
                                years={experience.arr.map((i) => i.year)}
                                paragraphs={experience.arr.map((i) => i.content)}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {(education.title || education.arr.length > 0) && 
                        <>
                            <Section 
                                title={education.title}
                                subTitles={education.arr.map((i) => i.title)} 
                                years={education.arr.map((i) => i.year)}
                                paragraphs={education.arr.map((i) => i.content)}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {(volunteering.title || volunteering.arr.length > 0) && 
                        <>
                            <Section 
                                title={volunteering.title}
                                subTitles={volunteering.arr.map((i) => i.title)} 
                                years={volunteering.arr.map((i) => i.year)}
                                paragraphs={volunteering.arr.map((i) => i.content)}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {(projects.title || projects.arr.length > 0) && 
                        <>
                            <Section 
                                title={projects.title}
                                subTitles={projects.arr.map((i) => i.title)} 
                                years={projects.arr.map((i) => i.year)}
                                paragraphs={projects.arr.map((i) => i.content)}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {/*Hobbies*/}
                        {hobbies.length > 0 &&
                        <>
                            <Hobbies content={hobbies.map(hobby => hobby.item)} t={t}/>
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                        }

                        {/*Languages*/}
                        {languages.length > 0 &&
                        <>
                            <SectionWithList 
                                title={t('languagesText_title')}
                                items={languages.map(i => i.level ? `${i.item} - ${i.level}` : i.item)}
                                t={t}
                            />
                            <div className="row mx-3 mt-3"><hr /></div>
                        </>
                            
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template1;

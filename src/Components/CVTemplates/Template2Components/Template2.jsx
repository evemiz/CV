import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import '../../../../public/templates.css'
import Links from "./Links";
import Section from "./Section";
import Skills from "./Skills";

function Template2({ 
    resumeRef,
    name,
    title,
    links,
    skills, 
    about,
    experience,
    education, 
    volunteering,
    projects,
    hobbies,
    languages,
    stepNum,
    t
}) {
    const { i18n } = useTranslation();

    return (
        <>
            <div id="template2" className="resume" ref={resumeRef}>
                <div className="container-fluid">
                    <div className="col">
                        <div className="row">
                            <div className="head-line"></div>
                        </div>
                        {
                            name && 
                            <>
                                <div className="row title mt-3">
                                    <h1 className={`${i18n.language === 'he' ? 'me-4' : 'ms-4'} title-name`}>{name.toUpperCase()}</h1>
                                    <h4 className={`${i18n.language === 'he' ? 'me-4' : 'ms-4'} title-description`}>{title}</h4>
                                </div>
                                <div className="row mx-3 mt-2"><hr /></div>  
                            </>
                        }
                        <div className="row gap-4">

                            <div className="col-4">

                                <div className="row">
                                    <Links 
                                        content={Object.values(links)} 
                                        icons={Object.keys(links)}
                                    />
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                                    {(education.title || education.arr.length > 0) && 
                                        <>
                                            <Section 
                                                title={education.title}
                                                subTitles={education.arr.map((i) => i.title)} 
                                                years={education.arr.map((i) => i.year)}
                                                paragraphs={education.arr.map((i) => i.content)}
                                            />
                                        </>
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                                    {skills.length > 0 && 
                                        <Skills 
                                            title = {t('skills_title')} 
                                            content = {skills} 
                                            t={t}
                                        />
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                                    {languages.length > 0 &&
                                        <Skills 
                                            title = {t('languagesText_title')}
                                            content={languages.map(i => i.level ? `${i.item} - ${i.level}` : i.item)}
                                            t={t} 
                                        />
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                                    {hobbies.length > 0 && 
                                        <Skills 
                                            title = {t('hobbiesText_title')} 
                                            content = {hobbies.map(entry => entry.item)} 
                                            t={t}
                                        />
                                    }
                                </div>

                            </div>

                            <div className="col">
                                <div className={`row ${i18n.language === 'he' ? 'ms-4' : 'me-4'}`}>
                                    {(about.content.length > 0 || about.title.length > 0) && 
                                        <>
                                            <Section 
                                                title = {[about.title]}
                                                subTitles = {[""]}
                                                years = {[""]}
                                                paragraphs = {[about.content]}
                                            />
                                        </>
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'ms-4' : 'me-4'}`}>
                                    {(experience.title || experience.arr.length > 0) && 
                                        <>
                                            <Section 
                                                title={experience.title}
                                                subTitles={experience.arr.map((i) => i.title)} 
                                                years={experience.arr.map((i) => i.year)}
                                                paragraphs={experience.arr.map((i) => i.content)}
                                            />
                                        </>
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'ms-4' : 'me-4'}`}>
                                    {(volunteering.title || volunteering.arr.length > 0) && 
                                        <>
                                            <Section 
                                                title={volunteering.title}
                                                subTitles={volunteering.arr.map((i) => i.title)} 
                                                years={volunteering.arr.map((i) => i.year)}
                                                paragraphs={volunteering.arr.map((i) => i.content)}
                                            />
                                        </>
                                    }
                                </div>

                                <div className={`row ${i18n.language === 'he' ? 'ms-4' : 'me-4'}`}>
                                    {(projects.title || projects.arr.length > 0) && 
                                        <>
                                            <Section 
                                                title={projects.title}
                                                subTitles={projects.arr.map((i) => i.title)} 
                                                years={projects.arr.map((i) => "")}
                                                paragraphs={projects.arr.map((i) => i.content)}
                                            />
                                        </>
                                    }
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Template2;

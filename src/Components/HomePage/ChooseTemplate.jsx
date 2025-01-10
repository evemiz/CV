import React, { useState } from "react";
import { cvDataEng, cvDataHeb } from "../CVTemplates/ExampleContent";
import { useTranslation } from 'react-i18next';
import Templates from "./Templates";


function ChooseTemplate({ setPage, templateToShow, setTemplateToShow, templates }) {
    const { i18n, t } = useTranslation();
    const isHebrew = i18n.language === 'he';
    
    const cvData = isHebrew ? cvDataHeb : cvDataEng;

    const renderTemplate = () => {
        const Template = templates[templateToShow];
        if (!Template) return null;
        return (
            <Template 
                resumeRef={null} 
                name={cvData.name} 
                links={cvData.links}
                skills={cvData.skills} 
                about={cvData.about}
                experience={cvData.experience} 
                education={cvData.education} 
                volunteering={cvData.volunteering} 
                projects={cvData.projects} 
                hobbies={cvData.hobbies} 
                languages={cvData.languages} 
                stepNum={cvData.stepNum} 
                t={t}
            />
        );
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Templates 
                            t={t} 
                            i18n={i18n}
                            setTemplateToShow={setTemplateToShow}
                        />
                    </div>

                    <div className="col">
                        {templateToShow !== null && 
                            <h4>{t('like_the_design')}<button onClick={() => setPage(3)} className="click-here-but mx-2">{t('like_the_design_btn')}</button></h4>
                        }
                        <div className="template-container">
                            {renderTemplate()}
                        </div>          
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseTemplate;

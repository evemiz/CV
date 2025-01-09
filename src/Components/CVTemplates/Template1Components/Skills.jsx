import React from "react";

function Skills({ content, t }) {
    return(
        <div className="row gap-5 d-flex align-items-start justify-content-center mt-4">
            <div className="col-auto">
                <div className={`row d-flex align-items-start p-0 ${t('skills_title') === 'כישורים' ? 'me-4' : 'ms-4'}`}>
                    <div className="sub-title-size p-0">{t('skills_title')}</div>
                </div>
            </div>
            <div className="col">
                <div className="row p-0 gap-2 d-flex justify-content-center">
                    {content.map((skill, index) => (
                        <div className="col-auto skills-bg" key={index}><span>{skill}</span></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
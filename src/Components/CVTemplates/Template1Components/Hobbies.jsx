import React from "react";

function Hobbies({ content, t}) {
    return(
        <div className="row gap-5 d-flex align-items-start justify-content-center ">
            <div className="col-auto">
                <div className={`row d-flex align-items-start p-0 ${document.documentElement.lang === 'he' ? 'me-4' : 'ms-4'}`}>
                    <div className="sub-title-size p-0">{t('hobbiesText_title')}</div>
                </div>
            </div>
            <div className="col">
                <div className={`row p-0 gap-2 d-flex justify-content-center ${document.documentElement.lang === 'he' ? 'ms-4' : 'me-4'}`}>
                    {content.map((skill, index) => (
                        <div className="col-auto" key={index}><span>{skill}</span></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
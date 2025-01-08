import React from "react";

function Skills({ content }) {
    return(
        <div className="row gap-5 d-flex align-items-start justify-content-center mt-4">
            <div className="col-auto">
                <div className="row ms-4 d-flex align-items-start p-0">
                    <div className="sub-title-size p-0">Skills</div>
                </div>
            </div>
            <div className="col">
                <div className="row me-4 p-0 gap-2 d-flex justify-content-center">
                    {content.map((skill, index) => (
                        <div className="col-auto skills-bg" key={index}><span>{skill}</span></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
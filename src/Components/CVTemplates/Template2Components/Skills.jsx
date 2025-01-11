import React from "react";

function Skills({ title, content, t }) {
    return(
        <div className="px-0 mt-3">
            <div className="sub-title-size p-0">{title}</div>
            <ul className="p-0 m-0">
                {content.map((skill, index) => (
                    <div className="px-0" key={index}><li className="pt-2 skills-list">{skill}</li></div>
                ))}  
            </ul>
            
        </div>
    );
};

export default Skills;
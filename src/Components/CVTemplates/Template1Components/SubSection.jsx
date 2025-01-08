import React from "react";

function SubSection({ title, year, paragraph }) {
    return(
        <>
            <div className="row ms-4">
                <div className="col p-0 m-0">
                    <div className="second-sub-title-size p-0 my-1">{title}</div>
                </div>
                <div className="col-auto p-0 m-0">
                    <div className="second-sub-title-size px-2 my-1 me-4 skills-bg">{year}</div>
                </div>  
            </div>
            <div className="row mx-4 p-0">
                <p className="p-0 m-0">{paragraph}</p>
            </div>
        </>
    );
};

export default SubSection;
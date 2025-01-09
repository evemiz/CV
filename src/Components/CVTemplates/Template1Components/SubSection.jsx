import React from "react";

function SubSection({ title, year, paragraph }) {
    const paragraphs = paragraph.split('\n');

    return(
        <>
            <div className={`row ${document.documentElement.lang === 'he' ? 'me-4' : 'ms-4'}`}>
                <div className="col p-0 m-0">
                    <div className="second-sub-title-size p-0 my-1">{title}</div>
                </div>
                <div className="col-auto p-0 m-0">
                    <div className={`second-sub-title-size px-2 my-1 skills-bg ${document.documentElement.lang === 'he' ? 'ms-4' : 'me-4'}`}>{year}</div>
                </div>  
            </div>
            <div className="row mx-4 p-0">
                {paragraphs.map((para, index) => (
                    <p className="p-0 m-0" key={index}>{para}</p>
                ))}
            </div>
        </>
    );
};

export default SubSection;

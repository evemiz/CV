import React from "react";

function SectionWithList({ title, subTitle, year, items, i18n }) {
    return(
        <>
            <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                <div className="sub-title-size p-0">{title}</div>
            </div>
            <div className="row ms-4">
                <div className="col p-0 m-0">
                    <div className="second-sub-title-size p-0 my-1">{subTitle}</div>
                </div>
                <div className="col-auto p-0 m-0">
                    <div className="second-sub-title-size px-2 my-1 me-4 skills-bg">{year}</div>
                </div>  
            </div> 
            <div className={`row p-0 ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> 
            </div>
        </>
    );
};

export default SectionWithList;
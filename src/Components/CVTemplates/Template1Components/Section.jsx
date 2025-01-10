import React from "react";
import SubSection from "./SubSection";

function Section({ title, subTitles, years, paragraphs, i18n }) {
    return(
        <>
            <div className={`row ${i18n.language === 'he' ? 'me-4' : 'ms-4'}`}>
                <div className="sub-title-size p-0">{title}</div>
            </div>

            {subTitles.map((title, index) => (
                <SubSection key={index} title={title} year={years[index]} paragraph={paragraphs[index]} i18n={i18n}/>
            ))}
        </>
    );
};

export default Section;
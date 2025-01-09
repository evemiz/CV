import React from "react";
import SubSection from "./SubSection";

function Section({ title, subTitles, years, paragraphs }) {
    return(
        <>
            <div className={`row ${document.documentElement.lang === 'he' ? 'me-4' : 'ms-4'}`}>
                <div className="sub-title-size p-0">{title}</div>
            </div>

            {subTitles.map((title, index) => (
                <SubSection key={index} title={title} year={years[index]} paragraph={paragraphs[index]}/>
            ))}
        </>
    );
};

export default Section;
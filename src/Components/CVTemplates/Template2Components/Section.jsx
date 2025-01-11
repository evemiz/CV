import React from "react";
import SubSection from "./SubSection";

function Section({ title, subTitles, years, paragraphs }) {
    return(
        <>
            <div className="sub-title-size p-0 mt-3 mb-2">{title}</div>

            {subTitles.map((title, index) => (
                <SubSection key={index} title={title} year={years[index]} paragraph={paragraphs[index]}/>
            ))}
        </>
    );
};

export default Section;
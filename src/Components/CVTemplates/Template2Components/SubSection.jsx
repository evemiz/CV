import React from "react";

function SubSection({ title, year, paragraph }) {
    const paragraphs = paragraph.split('\n');

    return(
        <>
            <div className="p-0 m-0">
                <div className="second-sub-title-size p-0">{title}</div>
            </div>

            <div className="p-0 m-0">
                <div className={`second-sub-title-size my-1 year-style`}>{year}</div>
            </div>  
            <div className="m-0 p-0">
                {paragraphs.map((para, index) => (
                    <p
                        className={`p-0`}
                        key={index}
                    >
                        {para}
                    </p>
                ))}
            </div>
        </>
    );
};

export default SubSection;

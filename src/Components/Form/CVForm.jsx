import React, { useState } from "react";
import '../../../public/CVForm.css';
import FirstStep from "./FirstStep";

function CVForm({
    name,
    setName,
    links,
    setLinks
}) {
    const [stepNum, setStepNum] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <h1 className="my-5 text-center">Let's Create Your Stunning Resume ✨</h1>
            <form onSubmit={handleSubmit}>
                {stepNum == 1 && 
                    <FirstStep 
                        name={name}
                        setName={setName}
                        links={links}
                        setLinks={setLinks}
                    />
                }
                
                {/* <button type="submit">Submit</button> */}
            </form>
            <span>{stepNum}</span>
            {stepNum > 1 && 
                <button onClick={() => setStepNum(stepNum - 1)}>prev</button>
            }
            
            <button onClick={() => setStepNum(stepNum + 1)}>next</button>
        </div>
    );
};

export default CVForm;

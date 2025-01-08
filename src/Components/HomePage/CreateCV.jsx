import React, { useState, useEffect, useRef } from "react";
import Template1 from "../CVTemplates/Template1";
import html2pdf from "html2pdf.js";
import CVForm from "../Form/CVForm";

function CreateCV() {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const resumeRef = useRef(null);
    const [name, setName] = useState("");
    const [links, setLinks] = useState({});
    const [skills, setSkills] = useState([]);
    const [about, setAbout] = useState({title: "", content: ""});

    useEffect(() => {
        const checkOverflow = () => {
            if (resumeRef.current) {
                setIsOverflowing(resumeRef.current.scrollHeight > resumeRef.current.clientHeight);
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);

        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    const generatePDF = () => {
        const element = document.getElementById("template-content");

        const opt = {
            margin:       0,    // הגדרת שוליים שווים
            filename:     'cv.pdf', // שם הקובץ
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },  // הגדלת איכות התמונה
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // ייבוא HTML ל-PDF
        html2pdf().from(element).set(opt).save();
    };

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col user-form">
                        <CVForm 
                            name={name}
                            setName={setName}
                            links={links}
                            setLinks={setLinks}
                            skills={skills}
                            setSkills={setSkills}
                            about={about}
                            setAbout={setAbout}
                        />
                    </div>
                    <div className="col">
                            <div className="template-container">
                            <div id="template-content">
                                <Template1 
                                    resumeRef={resumeRef}
                                    name={name}
                                    links={links}
                                    skills={skills}
                                    about={about}
                                />
                            </div>
                        </div>
                        <button onClick={generatePDF}>ייצא כ-PDF</button>
                    </div>
                </div>
            </div>
            {/* {isOverflowing && (
                <div className="overflow-warning">
                    <p>Warning: The content is overflowing the resume bounds. Please adjust the content.</p>
                </div>
            )} */}
        </>
        
    );
};

export default CreateCV;

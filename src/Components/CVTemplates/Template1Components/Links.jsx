import React from "react";
import { Phone, Email, Github, Linkedin, Facebook, Instagram } from "../IconsSvg";

function Links({ content, icons }) {

    const iconComponents = {
        Phone,
        Email,
        Github,
        Linkedin,
        Facebook, 
        Instagram
    };

    function getIcon(iconName) {
        const IconComponent = iconComponents[iconName]; // Retrieve the component
        return IconComponent ? <IconComponent /> : null; // Render it if it exists
    }

    return (
        <div className="col d-flex flex-column justify-content-center">
            {icons.map((icon, index) => (
                <div className="row p-0 mt-1" key={index}>
                    <div className="d-flex align-items-center">
                        <div className="circle me-2 p-0">
                            {getIcon(icon)}
                        </div> 
                        <span className="" style={{ whiteSpace: 'nowrap' }}>{content[index]}</span>
                    </div>
                </div>  
            ))}
        </div>
    );
};

export default Links;
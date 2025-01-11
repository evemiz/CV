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
        const IconComponent = iconComponents[iconName];
        return IconComponent ? <IconComponent /> : null;
    }

    return (
        <div className="col d-flex flex-column justify-content-center mb-2">
            {icons.map((icon, index) => (
                <div className="row p-0 mt-3" key={index}>
                    <div className="d-flex align-items-center">
                        <div className="icons-box mx-4 p-0">
                            {getIcon(icon)}
                        </div> 
                        <div style={{ 
                            whiteSpace: 'normal', 
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                            maxWidth: '100%'
                        }}>
                            {content[index]}
                        </div>
                    </div>
                </div>  
            ))}
        </div>
    );
};

export default Links;

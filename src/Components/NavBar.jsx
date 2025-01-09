import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import "../../public/userForm.css"
import animationData from '../../public/wired-outline-245-edit-document-hover-pinch.json';

function NavBar({ changeLanguage }) {
    const animationContainer = useRef(null);
    const animationInstance = useRef(null);
    const [currentLanguage, setCurrentLanguage] = useState(document.documentElement.lang || "en");

    useEffect(() => {
        animationInstance.current = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: false,
            animationData: animationData,
        });

        return () => {
            animationInstance.current.destroy(); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        document.documentElement.lang = currentLanguage;
    }, [currentLanguage]);

    const handleMouseEnter = () => {
        animationInstance.current.play(); // Play animation on hover
    };

    const handleMouseLeave = () => {
        animationInstance.current.stop(); // Stop animation when hover ends
    };

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "he" ? "en" : "he";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage); // Call the parent function if needed
    };

    return (
        <div className="container-fluid p-0 m-0">
            <header className="d-flex flex-wrap justify-content-center p-3 mb-4 mx-0 border-bottom nav-style">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        direction: "ltr", 
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Animation Container */}
                    <div
                        ref={animationContainer}
                        style={{ width: 45, height: 45 }}
                    />
                    {/* Text Next to Animation */}
                    <span className="logo-nav">NextStepCV</span>
                </a>
                <button
                    onClick={toggleLanguage}
                    className="btn btn-outline-secondary mt-2"
                    style={{position: 'absolute', right: '10px'}}
                >
                    {currentLanguage === "he" ? "עבור לאתר באנגלית" : "Switch to Hebrew site"}
                </button>
            </header>
        </div>
    );
}

export default NavBar;

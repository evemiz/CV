import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from '../../public/wired-outline-245-edit-document-hover-pinch.json';

function NavBar() {
    const animationContainer = useRef(null);
    const animationInstance = useRef(null);

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

    const handleMouseEnter = () => {
        animationInstance.current.play(); // Play animation on hover
    };

    const handleMouseLeave = () => {
        animationInstance.current.stop(); // Stop animation when hover ends
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
            </header>
        </div>
    );
}

export default NavBar;

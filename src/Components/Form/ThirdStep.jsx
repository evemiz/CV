import React from "react";

function ThirdStep({ about, setAbout}) {

    const handleContentChange = (e) => {
        const { value } = e.target;
        setAbout((prevAbout) => ({
            ...prevAbout,
            content: value, 
        }));
    };

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setAbout((prevAbout) => ({
            ...prevAbout,
            title: value, 
        }));
    };

    return(
        <>
            <div className="form-group">
                <label className="form-label">
                    <h5>Tell us a little about yourself !</h5>
                    <p>Share your strengths, passions, or anything you'd like others to know about you. This section is your chance to shine and make a great impression.</p>
                </label>

                <label htmlFor="title">Section Title</label>
                <input
                    type="text"
                    name="title"
                    value={about.title}
                    onChange={handleTitleChange}
                    placeholder="e.g., About Me"
                    className="form-control mb-3"
                />

                <label htmlFor="content">Content</label>
                <textarea
                    type="text"
                    name="content"
                    value={about.content}
                    onChange={handleContentChange}
                    placeholder="e.g., I am a dedicated software engineer with a passion for solving complex problems and learning new technologies..."
                    className="form-control"
                    rows="8"
                />
            </div>
        </>
    );
};

export default ThirdStep;
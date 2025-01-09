import React from "react";

function ThirdStep({ about, setAbout, t }) {

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
                    <h5>{t('aboutSectionTitle')}</h5>
                    <p>{t('aboutSectionDescription')}</p>
                </label>

                <label htmlFor="title">{t('section_title')}</label>
                <input
                    type="text"
                    name="title"
                    value={about.title}
                    onChange={handleTitleChange}
                    placeholder={t('sectionTitlePlaceholder')}
                    className="form-control mb-3"
                />

                <label htmlFor="content">{t('content_title')}</label>
                <textarea
                    type="text"
                    name="content"
                    value={about.content}
                    onChange={handleContentChange}
                    placeholder={t('contentPlaceholder')}
                    className="form-control"
                    rows="8"
                />
            </div>
        </>
    );
};

export default ThirdStep;
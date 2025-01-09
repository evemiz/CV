import React from "react";
import "../../../public/homePage.css"

function GetStarted({ t }) {
    return(
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="public/home.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <p className="lead"><span className="web-name-title">NextStepCV</span> {t('platform_description')}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-center mt-4">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">{t('get_started')}</button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom">{t('tips_title')}</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                    </svg>
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_keep_concise')}</h3>
                        <p>{t('tip_keep_concise_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                    </svg>
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_highlight_achievements')}</h3>
                        <p>{t('tip_highlight_achievements_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_tailor_job')}</h3>
                        <p>{t('tip_tailor_job_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_use_action_verbs')}</h3>
                        <p>{t('tip_use_action_verbs_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_proofread')}</h3>
                        <p>{t('tip_proofread_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5z"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_clean')}</h3>
                        <p>{t('tip_clean_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_skills')}</h3>
                        <p>{t('tip_skills_desc')}</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"  className="bi text-body-secondary flex-shrink-0 mx-3" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z"/>
                    </svg>                    
                    <div>
                        <h3 className="mb-0 fs-4 text-body-emphasis">{t('tip_summary')}</h3>
                        <p>{t('tip_summary_desc')}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
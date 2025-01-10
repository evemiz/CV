import React from "react";
import "../../../public/userForm.css"

function Templates({ t, i18n, setTemplateToShow }) {
    return(
        <div className="container-fluid">
            <h1 className="mb-3 text-center">{t('choose_template')}</h1>
            <div className="row justify-content-center templates-grid-container">
                <div onClick={(e) => setTemplateToShow(1)} className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
                <div id="1" className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
                <div id="1" className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
                <div id="1" className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
                <div id="1" className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
                <div id="1" className="col-auto">
                    <img className="img-templates" src={`public/examples/${i18n.language === 'he' ? 'heb' : 'eng'}1.png`}></img>
                </div>
            </div>
        </div>
    )
}

export default Templates;
import React, {useEffect, useState} from "react";
import CreateCV from "./CreateCV";
import { useTranslation } from 'react-i18next';
import NavBar from "../NavBar";
import GetStarted from "./GetStarted";
import ChooseTemplate from "./ChooseTemplate";
import Template1 from "../CVTemplates/Template1Components/Template1";
import Template2 from "../CVTemplates/Template2Components/Template2";

import { cvDataEng, cvDataHeb } from "../CVTemplates/ExampleContent";

function Home() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(1);
    const [templateToShow, setTemplateToShow] = useState(null);

    const isHebrew = i18n.language === 'he';
        
    const cvData = isHebrew ? cvDataHeb : cvDataEng;

    const templates = {
        1: Template1,
        2: Template2,
        // 3: Template3,
        // 4: Template4
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        if (i18n.language === 'he') {
          document.documentElement.setAttribute('dir', 'rtl');
          document.body.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
          document.body.setAttribute('dir', 'ltr');
        }
      }, [i18n.language]);

    return(
        <>
          <NavBar changeLanguage={changeLanguage}/>
          {/* <Template2
                resumeRef={null} 
                name={cvData.name} 
                title={cvData.title}
                links={cvData.links}
                skills={cvData.skills} 
                about={cvData.about}
                experience={cvData.experience} 
                education={cvData.education} 
                volunteering={cvData.volunteering} 
                projects={cvData.projects} 
                hobbies={cvData.hobbies} 
                languages={cvData.languages} 
                stepNum={cvData.stepNum} 
                t={t}
            /> */}

          {page === 1 && 
            <GetStarted t={t} setPage={setPage}/>
          }

          {page === 2 && 
            <ChooseTemplate 
              setPage={setPage}
              templateToShow={templateToShow}
              setTemplateToShow={setTemplateToShow}
              templates={templates}
            />
          }

          {page === 3 && 
            <CreateCV 
              t={t}
              templateToShow={templateToShow}
              templates={templates}
            />
          }
        </>
    )
};

export default Home;
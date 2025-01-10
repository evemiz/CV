import React, {useEffect, useState} from "react";
import CreateCV from "./CreateCV";
import { useTranslation } from 'react-i18next';
import NavBar from "../NavBar";
import GetStarted from "./GetStarted";
import ChooseTemplate from "./ChooseTemplate";
import Template1 from "../CVTemplates/Template1Components/Template1";

function Home() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(1);
    const [templateToShow, setTemplateToShow] = useState(null);

    const templates = {
        1: Template1,
        // 2: Template2,
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
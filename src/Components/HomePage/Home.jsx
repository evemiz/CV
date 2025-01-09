import React, {useEffect} from "react";
import CreateCV from "./CreateCV";
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();

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
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('he')}>עברית</button>
            <CreateCV 
                t={t}
            />
        </>
    )
};

export default Home;
// About.js
import React from 'react';
import AS from './About.module.css';
import GIF from './images/3BBS.gif';
import Im from './images/yellowTheme-boy (1).svg'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={AS.about}>
      <div className={AS.content}>
        <div className={AS.titleContainer}>
          <div className={AS.longLine}></div>
        </div>
        <div className={AS.who}>
          <h2 className={AS.title}>{t('a1')}</h2> 
          <p>
            {t('a2')} 
          </p>
          <p className={AS.description}>
            {t('a3')} 
          </p>
        </div>
      </div>
      <div className={AS.illustration}>
        <img src={Im} alt="" />
      </div>
    </section>
  );
};

export default About;

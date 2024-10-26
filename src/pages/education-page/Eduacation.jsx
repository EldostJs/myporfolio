import React from 'react';
import ES from './Eduacation.module.css';
import EI from './images/eduYellow.svg';
import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation(); 

    const educationData = [
        {
            years: '2008-2016',
            degree: t('e1'),
            institution: t('e2'),
            link: 'http://school67samara.com/',
        },
        {
            years: '2016-2019',
            degree: t('e3'),
            institution: t('e4'),
            link: 'https://bakimektebleri.edu.az/181/',
        },
        {
            years: '2019-2023',
            degree: t('e5'),
            institution: t('e6'),
            link: 'https://www.bbu.edu.az/',
        },
    ];

    return (
        <section className={ES.educationSection}>
            <div className={ES.educationContainer}>
                <div className={ES.educationDetails}>
                    <h2 className={ES.title}>{t('e7')}</h2>
                    {educationData.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ES.educationItemButton}
                        >
                            <div className={ES.educationItem}>
                                <div className={ES.iconContainer}>
                                    <span className={ES.icon}>🎓</span>
                                </div>
                                <div className={ES.details}>
                                    <p className={ES.years}>{item.years}</p>
                                    <h3 className={ES.degree}>{item.degree}</h3>
                                    <p className={ES.institution}>{item.institution}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className={ES.illustration}>
                    <img src={EI} alt="Educational illustration" />
                </div>
            </div>
        </section>
    );
};

export default Education;

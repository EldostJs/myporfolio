import React from 'react';
import ES from './Eduacation.module.css';
import EI from './images/eduYellow.svg';

const Education = () => {
    const educationData = [
        {
            years: '2008-2016',
            degree: 'Higher Secondary Education',
            institution: 'Secondary School N67 (Russia, Samara)',
            link: 'http://school67samara.com/',
        },
        {
            years: '2016-2019',
            degree: 'Higher Secondary Education',
            institution: 'Secondary School N181 (Azerbaijan, Baku)',
            link: 'https://bakimektebleri.edu.az/181/',
        },
        {
            years: '2019-2023',
            degree: 'Bachelor of Business and Management',
            institution: 'Baku Business University',
            link: 'https://www.bbu.edu.az/',
        },
    ];

    return (
        <section className={ES.educationSection}>
            <div className={ES.educationContainer}>
                <div className={ES.educationDetails}>
                    <h2 className={ES.title}>Education</h2>
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

import React from 'react';
import es from './Experience.module.css';
import Table from './images/expYellow.svg';
import EA from './images/elshad-agayevs-school-logo.png'

const Experience = () => {
  const experiences = [
    { year: '15.06.2024', role: 'Successfully completed a team project using JavaScript.', company: 'EACAMP', url: 'https://www.linkedin.com/posts/kanan-samandarli-5aa76077_proudmentor-javascript-html-activity-7200078219985776640-4Hyc?utm_source=share&utm_medium=member_desktop' },
    { year: '03.10.2024', role: 'Completed the delivery of a project using React as part of a team effort.', company: 'EACAMP', url: 'https://www.linkedin.com/posts/kanan-samandarli-5aa76077_bu-g%C3%BCn-b%C3%B6y%C3%BCk-q%C3%BCrur-hissi-il%C9%99-t%C9%99l%C9%99b%C9%99l%C9%99rimin-activity-7247561969572933634-Lk4_?utm_source=share&utm_medium=member_desktop' },
    { year: '20.10.2024', role: 'Received a certificate of completion of courses, confirming new professional skills.', company: 'EACAMP', url: 'https://school.eacampschool.com/' }
  ];

  return (
    <div className={es.container}>
      <div className={es.leftSection}>
        <img src={Table} alt='' className={es.image}></img>
      </div>
      <div className={es.rightSection}>
        <h2 className={es.title}>Experience</h2>
        <div className={es.experienceList}>
          {experiences.map((exp, index) => (
            <a key={index} href={exp.url} className={es.experienceItem} target="_blank" rel="noopener noreferrer">
              <img src={EA} alt='' className={es.icon}></img>
              <div className={es.details}>
                <div className={es.year}>{exp.year}</div>
                <div className={es.role}>{exp.role}</div>
                <div className={es.company}>{exp.company}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

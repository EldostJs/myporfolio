import React from 'react';
import styles from './Projects.module.css';
import weather from './images/weather.png'
import paper from './images/paper.png'
import muvi from './images/muvi.png'
import { useTranslation } from 'react-i18next';


const Projects = () => {
    const { t } = useTranslation(); 

    const projects = [
        {
            title: t('p1'),
            image: weather,
            description: t('p2'),
            technologies: ['React', 'CSS', 'Weather API'],
            id: 1,
            url: 'https://lnkd.in/dpAhQtVH',
            codeUrl: 'https://github.com/EldostJs/Weather-forecast-react',
        },
        {
            title: t('p3'),
            image: muvi,
            description: t('p4'),
            technologies: ['JavaScript', 'CSS', 'Movie API'],
            id: 2,
            url: 'https://eldostjs.github.io/movie/',
            codeUrl: 'https://github.com/EldostJs/movie',

        },
        {
            title: t('p5'),
            image: paper,
            description: t('p6'),
            technologies: ['JavaScript', 'CSS'],
            id: 3,
            url: 'https://eldostjs.github.io/Rock-Paper-Scissorus/',
            codeUrl: 'https://github.com/EldostJs/Rock-Paper-Scissorus',

        }
    ];

    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>{t('p7')}</h1>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.frontContent}>
                                <div className={styles.imageContainer}>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.playButton}
                                    onClick={()=> window.open(project.url, '_blank')}
                                    >
                                        <span className={styles.playIcon}>▶</span>
                                    </button>
                                    <button className={styles.codeButton}
                                    onClick={()=> window.open(project.codeUrl, '_blank')}
                                    >
                                        <span className={styles.codeIcon}>&lt;/&gt;</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.hoverContent}>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.technologiesList}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.viewAllContainer}>
                <button 
                 onClick={() => window.open('https://github.com/EldostJs?tab=repositories', '_blank')}
                className={styles.viewAllButton}>{t('p8')}</button>
            </div>
        </div>
    );
};

export default Projects;
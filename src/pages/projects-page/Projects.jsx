import React from 'react';
import styles from './Projects.module.css';
import weather from './images/weather.png'
import paper from './images/paper.png'
import muvi from './images/muvi.png'

const Projects = () => {
    const projects = [
        {
            title: 'Weather Forecast',
            image: weather,
            description: 'The weather app provides accurate data on the current temperature and forecast for the coming days.',
            technologies: ['React', 'CSS', 'Weather API'],
            id: 1,
            url: 'https://lnkd.in/dpAhQtVH',
            codeUrl: 'https://github.com/EldostJs/Weather-forecast-react',
        },
        {
            title: 'Search Movies',
            image: muvi,
            description: 'The movie search website provides easy access to film information, genres, and ratings, helping you discover new movies effortlessly.',
            technologies: ['JavaScript', 'CSS', 'Movie API'],
            id: 2,
            url: 'https://eldostjs.github.io/movie/',
            codeUrl: 'https://github.com/EldostJs/movie',

        },
        {
            title: 'Rock-Paper-Scissors',
            image: paper,
            description: 'The Rock, Paper, Scissors website lets users play the classic game against a robot, providing a fun way to test their skills.',
            technologies: ['JavaScript', 'CSS'],
            id: 3,
            url: 'https://eldostjs.github.io/Rock-Paper-Scissorus/',
            codeUrl: 'https://github.com/EldostJs/Rock-Paper-Scissorus',

        }
    ];

    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>Projects</h1>
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
                <button className={styles.viewAllButton}>View All</button>
            </div>
        </div>
    );
};

export default Projects;
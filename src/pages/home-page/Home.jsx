import React from 'react';
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import HS from './Home.module.css';
import ProfImg from './images/345591843_1450759638663497_3456097937288446370_n.jpg';

export default function Home() {
    const handleWbsitelinkedln = () => {
        window.open('https://www.linkedin.com/in/eldostmirzeyev/');
    };
    const handleWbsiteGitHub = () => {
        window.open('https://github.com/EldostJs');
    };
    const handleWbsiteInstagram = () => {
        window.open('https://www.instagram.com/_mirzeev_/?igsh=MThrcDJzdXp2Y2h4ZQ%3D%3D');
    };
    const handleWbsiteFacebook = () => {
        window.open('https://www.facebook.com/eldost.mirzoev?locale=ru_RU');
    };

    return (
        <div className={HS.container}>
            <div className={HS.left}>
                <div className={HS.logo}>
                    <h2>Eldost JS</h2>
                </div>
                <div className={HS.socialIcons}>
                    <Linkedin size={30} onClick={handleWbsitelinkedln} />
                    <Github size={30} onClick={handleWbsiteGitHub} />
                    <Instagram size={30} onClick={handleWbsiteInstagram} />
                    <Facebook size={30} onClick={handleWbsiteFacebook} />
                </div>
            </div>
            <div className={HS.profileImageContainer}>
                <div className={HS.profileImage}>
                    <img src={ProfImg} alt="" className={HS.image} />
                </div>
            </div>
            <div className={HS.right}>
                <div className={HS.content}>
                    <h3>Front-End Developer</h3>
                    <h1>Eldost Mirzeyev</h1>
                    <p>
                        Front-end developer with experience in creating interactive and responsive web applications.
                        Proficient in HTML5, CSS3, JavaScript (ES6+), and React. Skilled in Git, responsive design, and API integration.
                        Focused on delivering high-quality UX/UI solutions and staying up to date with the latest web development trends.
                    </p>
                    <div className={HS.buttonDiv}>
                        <button className={HS.downloadBtn}>Download CV</button>
                        <button className={HS.contactBtn}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

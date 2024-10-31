import React from 'react';
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import HS from './Home.module.css';
import ProfImg from './images/345591843_1450759638663497_3456097937288446370_n.jpg';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../translate/LanguageContext';

export default function Home() {
    const { t } = useTranslation();
    const { changeLanguage } = useLanguage();

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWebsiteLinkedIn = () => {
        window.open('https://www.linkedin.com/in/eldostmirzeyev/');
    };

    const handleWebsiteGitHub = () => {
        window.open('https://github.com/EldostJs');
    };

    const handleWebsiteInstagram = () => {
        window.open('https://www.instagram.com/_mirzeev_/?igsh=MThrcDJzdXp2Y2h4ZQ%3D%3D');
    };

    const handleWebsiteFacebook = () => {
        window.open('https://www.facebook.com/eldost.mirzoev?locale=ru_RU');
    };

    const handleDownloadCV = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1lSSghVbAscUxqloJgyziTWkga_2xeKjd/view?usp=sharing';
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={HS.container}>
            <div className={HS.languageButtons}>
                <button onClick={() => changeLanguage('ru')} className={HS.languageBtn}>Ru</button>
                <button onClick={() => changeLanguage('en')} className={HS.languageBtn}>En</button>
                <button onClick={() => changeLanguage('az')} className={HS.languageBtn}>Az</button>
            </div>

            <div className={HS.left}>
                <div className={HS.logo}>
                    <h2>ELdost JS</h2>
                </div>
                <div className={HS.socialIcons}>
                    <Linkedin size={30} onClick={handleWebsiteLinkedIn} />
                    <Github size={30} onClick={handleWebsiteGitHub} />
                    <Instagram size={30} onClick={handleWebsiteInstagram} />
                    <Facebook size={30} onClick={handleWebsiteFacebook} />
                </div>
            </div>

            <div className={HS.profileImageContainer}>
                <div className={HS.profileImage}>
                    <img src={ProfImg} alt="Profile" className={HS.image} />
                </div>
            </div>

            <div className={HS.right}>
                <div className={HS.content}>
                    <h3>{t('h1')}</h3>
                    <h1>{t('h2')}</h1>
                    <p>{t('h3')}</p>
                    <div className={HS.buttonDiv}>
                        <button
                            onClick={handleDownloadCV}
                            className={HS.downloadBtn}
                        >
                            {t('h4')}
                        </button>

                        <button
                            className={HS.contactBtn}
                            onClick={handleContactClick}
                        >
                            {t('h5')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
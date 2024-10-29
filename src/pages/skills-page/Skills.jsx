import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ss from './Skills.module.css';
import { useTranslation } from 'react-i18next';


import bootstrapIcon from './images/bootstrap.png';
import figmaIcon from './images/figma.png';
import githubIcon from './images/github.png';
import htmlIcon from './images/html.png';
import JsIcon from './images/js.png';
import reactIcon from './images/science.png';
import gitIcon from './images/social (1).png';
import jQuery from './images/social (2).png';
import css from './images/social.png';
import gpt from './images/chatgpt.png';
import ai from './images/artificial-intelligence.png';
import uiUx from './images/ui-ux.png';
import responsive from './images/responsive-design.png';
import npm from './images/programing.png';
import api from './images/api.png';
import vite from './images/vite-seeklogo.svg';
import reactQuery from './images/react-query-seeklogo.svg';
import axios from './images/axios_logo_icon_168545.png';

const skills = [
    { name: 'Git', icon: gitIcon, url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: githubIcon, url: 'https://github.com/' },
    { name: 'JavaScript', icon: JsIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: reactIcon, url: 'https://reactjs.org/' },
    { name: 'React+Vite', icon: vite, url: 'https://vitejs.dev/' },
    { name: 'HTML', icon: htmlIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: css, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Ui-Ux', icon: uiUx, url: 'https://www.interaction-design.org/literature/topics/ui-design' },
    { name: 'Responsive Design', icon: responsive, url: 'https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/' },
    { name: 'Bootstrap', icon: bootstrapIcon, url: 'https://getbootstrap.com/' },
    { name: 'AI', icon: ai, url: 'https://en.wikipedia.org/wiki/Artificial_intelligence' },
    { name: 'GPT', icon: gpt, url: 'https://openai.com/gpt-3/' },
    { name: 'Figma', icon: figmaIcon, url: 'https://www.figma.com/' },
    { name: 'jQuery', icon: jQuery, url: 'https://jquery.com/' },
    { name: 'React-Query', icon: reactQuery, url: 'https://react-query.tanstack.com/' },
    { name: 'NPM', icon: npm, url: 'https://www.npmjs.com/' },
    { name: 'API', icon: api, url: 'https://en.wikipedia.org/wiki/API' },
    { name: 'Axios', icon: axios, url: 'https://axios-http.com/' },
];

const Skills = () => {
    const { t } = useTranslation();

    const swiperRef = useRef(null);

    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <div className={ss.skillsContainer}>
            <h2 className={ss.skillsTitle}>{t('q1')}</h2>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className={ss.swiper}
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} className={ss.swiperSlide}>
                        <div className={ss.skillItem}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <a href={skill.url} target="_blank" rel="noopener noreferrer">
                                <img src={skill.icon} alt={skill.name} className={ss.skillIcon} />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skills;

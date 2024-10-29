import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { LanguageProvider } from './translate/LanguageContext';
import Home from "./pages/home-page/Home";
import About from "./pages/about-page/About";
import Education from "./pages/education-page/Eduacation";
import Experience from "./pages/experience-page/Experience";
import Projects from "./pages/projects-page/Projects";
import Skills from "./pages/skills-page/Skills";
import Contact from "./pages/contact-page/Contact";

function App() {
    useEffect(() => {
        // Инициализация Google Analytics
        ReactGA.initialize('G-0Q151VQPKQ');

        // Отправка события pageview
        ReactGA.send("pageview");
    }, []);

    return (
        <LanguageProvider>
            <Home />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </LanguageProvider>
    );
}

export default App;

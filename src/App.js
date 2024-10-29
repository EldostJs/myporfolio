import React, { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
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
        // Initialize GA4
        ReactGA4.initialize('G-0Q151VQPKQ');
        
        // Send pageview with a callback
        ReactGA4.send({
            hitType: "pageview",
            page: window.location.pathname + window.location.search
        });

        // Optional: Track page changes if you're using React Router
        const handleLocationChange = () => {
            ReactGA4.send({
                hitType: "pageview",
                page: window.location.pathname + window.location.search
            });
        };

        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
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
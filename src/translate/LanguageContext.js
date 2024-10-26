// LanguageContext.js
import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(()=>{
        const saveLanguage = localStorage.getItem('language')
        if (saveLanguage) {
            i18n.changeLanguage(saveLanguage)
        }
    },[i18n])

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang)
    };

    return (
        <LanguageContext.Provider value={{ changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};

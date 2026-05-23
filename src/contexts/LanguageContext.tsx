"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'zh';
type Translations = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const stored = localStorage.getItem('danni-lang') as Language | null;
        if (stored === 'en' || stored === 'zh') {
            setLanguage(stored);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('danni-lang', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

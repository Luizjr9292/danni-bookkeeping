"use client";

import React, { createContext, useContext, useSyncExternalStore, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'zh';
type Translations = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const LANGUAGE_STORAGE_KEY = 'danni-lang';
const LANGUAGE_CHANGE_EVENT = 'danni-language-change';

function getStoredLanguage(): Language {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === 'zh' ? 'zh' : 'en';
}

function getServerLanguage(): Language {
    return 'en';
}

function subscribeToLanguage(onStoreChange: () => void) {
    window.addEventListener('storage', onStoreChange);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

    return () => {
        window.removeEventListener('storage', onStoreChange);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
    };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const language = useSyncExternalStore(subscribeToLanguage, getStoredLanguage, getServerLanguage);

    const handleSetLanguage = (lang: Language) => {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
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

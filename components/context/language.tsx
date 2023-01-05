import { useState, createContext } from "react";

export interface LanguageContextI {
    language: string,
    setLanguage: (language: string) => void
}

export const LanguageContext = createContext<LanguageContextI | null>(null);

interface LanguageProviderI {
    children: React.ReactNode
}

export default function LanguageProvider({children}: LanguageProviderI) {
    const [language, setLanguage] = useState(
        globalThis?.window?.navigator.language.split('-')[0] !== 'fr' ? 'en' : 'fr'
    )
    
    return (
        <LanguageContext.Provider value={{language: language, setLanguage: setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
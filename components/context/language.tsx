import { useState, createContext } from "react";

const LanguageContext = createContext([{}, () => {}]);

interface LanguageProviderI {
    children: React.ReactNode
}

export default function LanguageProvider({children}: LanguageProviderI) {
    const [language, setLanguage] = useState(
        window.navigator.language.split('-')[0] !== 'fr' ? 'en' : 'fr'
    )

    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            {children}
        </LanguageContext.Provider>
    )
}
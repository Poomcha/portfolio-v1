import { useState, createContext, useEffect } from 'react';

export interface LanguageContextI {
  language: string;
  setLanguage: (language: (prevLang: string) => string | string) => void;
}

export const LanguageContext = createContext<LanguageContextI | null>(null);

interface LanguageProviderI {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderI) {
  const [language, setLanguage] = useState('fr');

  useEffect(
    () =>
      setLanguage(
        globalThis?.window?.navigator.language.split('-')[0] !== 'fr'
          ? 'en'
          : 'fr'
      ),
    []
  );

  return (
    <LanguageContext.Provider
      value={{ language: language, setLanguage: setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

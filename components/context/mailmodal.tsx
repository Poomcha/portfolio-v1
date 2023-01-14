import { useState, createContext } from 'react';

export interface MailModalContextI {
  isOpen: boolean;
  setIsOpen: (isOpen: (prevLang: boolean) => boolean | boolean) => void;
}

export const MailModalContext = createContext<MailModalContextI | null>(null);

interface MailModalProviderI {
  children: React.ReactNode;
}

export default function MailModalProvider({ children }: MailModalProviderI) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MailModalContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      {children}
    </MailModalContext.Provider>
  );
}

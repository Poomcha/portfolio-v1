import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface PagesI {
  names: string[];
  current: number;
}

export interface PageContextI<T> {
  pages: T;
  setCurrentPage: Dispatch<SetStateAction<T>>;
}
interface PageProviderI {
  children: React.ReactNode;
}

export const PageContext = createContext<PageContextI<PagesI> | null>(null);

export default function PageProvider({ children }: PageProviderI) {
  const [pages, setCurrentPage] = useState<PagesI>({
    names: ['introduction', 'showcase', 'additionnals'],
    current: 0,
  });

  return (
    <PageContext.Provider
      value={{ pages: pages, setCurrentPage: setCurrentPage }}
    >
      {children}
    </PageContext.Provider>
  );
}

import LanguageProvider from '../context/language';
import Header from './header/header';
import Aside from './aside/aside';
import Box from './box/box';
import MailModal from './mailmodal/mailmodal';
import MailModalProvider from '../context/mailmodal';
import Scrollbar from './scrollbar/scrollbar';
import PageProvider from '../context/page';
import { useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface LayoutI {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutI) {
  const { height } = useWindowDimensions();

  // Keep the height of the `page` responsive.
  useEffect(() => {
    Array.from(
      window.document.getElementsByClassName(
        'page'
      ) as HTMLCollectionOf<HTMLElement>
    ).forEach(
      (htmlElement) => (htmlElement.style.height = `calc(${height}px - 2rem)`)
    );
  }, [height]);

  return (
    <>
      <LanguageProvider>
        <MailModalProvider>
          <PageProvider>
            <Box>
              <Header />
              <Aside />
              <main>
                <MailModal />
                {children}
              </main>
            </Box>
          </PageProvider>
        </MailModalProvider>
      </LanguageProvider>
    </>
  );
}

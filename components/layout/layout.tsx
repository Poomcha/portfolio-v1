import LanguageProvider from '../context/language';
import Header from './header/header';
import Aside from './aside/aside';
import Box from './box/box';
import MailModal from './mailmodal/mailmodal';
import MailModalProvider from '../context/mailmodal';

interface LayoutI {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutI) {
  return (
    <>
      <LanguageProvider>
        <MailModalProvider>
          <Box>
            <Header />
            <Aside />
            <main>
              <MailModal />
              {children}
            </main>
          </Box>
        </MailModalProvider>
      </LanguageProvider>
    </>
  );
}

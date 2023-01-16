import LanguageProvider from '../context/language';
import Header from './header/header';
import Aside from './aside/aside';
import Box from './box/box';
import MailModal from './mailmodal/mailmodal';
import MailModalProvider from '../context/mailmodal';
import Scrollbar from './scrollbar/scrollbar';
import PageProvider from '../context/page';

interface LayoutI {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutI) {
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

import LanguageProvider from "../context/language"
import Header from "./header/header"
import Aside from "./aside/aside"

interface LayoutI {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutI) {
    return (
        <>
            <LanguageProvider>
                <Header />
                <Aside />
                <main>
                    {children}
                </main>                                     
            </LanguageProvider>
        </>
    )
}
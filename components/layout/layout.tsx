import LanguageProvider from "../context/language"
import Aside from "./aside/aside"

interface LayoutI {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutI) {
    return (
        <>
            <LanguageProvider>
                <Aside />
                <main>
                    {children}
                </main>                                     
            </LanguageProvider>
        </>
    )
}
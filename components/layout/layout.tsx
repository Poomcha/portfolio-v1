import Aside from "./aside/aside"

interface LayoutP {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutP) {
    return (
        <>
            <Aside />
            <main>
                {children}
            </main>
        </>
    )
}
import Header from '@/app/header/header'
import 'react-tooltip/dist/react-tooltip.css'
import '@/app/globals.css'
import Footer from '@/app/footer/footer'

export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

import Head from 'next/head'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { navigation } from '../../../pages/api/navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>
                    Liam&apos;s Site
                </title>
            </Head>
            <Header navigation={navigation} title="I ❤️ SOUL 🎂"/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
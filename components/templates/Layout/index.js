import Head from 'next/head'

import Nav from '../../molecules/Nav'
import Footer from '../../organisms/Footer'
import { navigation } from '../../../pages/api/navigation'

const Layout = ({ children }) => {
    // console.log(navigation)
    return (
        <>
            <Head>
                <title>
                    Liam&apos;s Site
                </title>
            </Head>
            <Nav navLinks={navigation}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>
                    Liam&apos;s Site 
                </title>
            </Head>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </>
    )
}

export default App
import Head from 'next/head'
import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;
import React from 'react'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Shop App</title>
                <link rel="icon" href="/shopping-cart.svg" />
            </Head>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop App</title>
        <link rel="icon" href="/shopping-cart.svg" />
      </Head>
      
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lukas Belka - Analytics Developer</title>
        <meta name="description" content="Lukas Belka - Analytics Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Hi, I'm Lukas, a German-based Analytics Developer. 
        </h3>

        <p className={styles.description}>
          Today it's my job to make data human-friendly and usable - I like it! However,
          I was not always diving in data lakes why I would describe myself as a kind of hybrid: For
          nearly ten years I worked as a project manager in the financial services industry,
          where I headed the PMO of a large IT transformation project for two years.
        </p>
        <p className={styles.description}>
          Back then I realized that dealing with data professionally would enable me to perfectly combine
          domain knowledge with data and IT skills in order to gain insights that matter. I have finished
          my MBA in eBusiness and started programming in Python and JavaScript - a perfect combination! 
        </p>
        <p className={styles.description}>
          I believe open data is key to increase transparency and knowledge across all domains. Therefore
          I use data, tranform it and share it for free!
        </p> 
{/*          <code className={styles.code}>pages/index.js</code>*/}


{/*        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
  */}      </main>

      <footer className={styles.footer}>
      <p> {styles.paragraph} © {new Date().getFullYear()} - Lukas Belka</p> 
      </footer>
    </div>
  )
}

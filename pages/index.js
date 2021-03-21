import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>

        meu nome é {name}

      </main>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/hello')
  const json = await res.json();

  return {
    props: {
      name: json.name
    }
  }
}

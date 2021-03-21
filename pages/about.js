//this page is using Static Generation (getStaticProps)

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About({ author }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sobre nós</h1>
        <p>
          É claro que a determinação clara de objetivos maximiza as
          possibilidades por conta das condições inegavelmente apropriadas.
        </p>
        <hr/>
        <p>Autor: {author}</p>
        <br/>
        <Link href={"/search"}>Buscar filme</Link>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      author: 'Mariana',
    },
  };
}

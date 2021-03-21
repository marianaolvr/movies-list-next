//this page is using server-side rendering (ssr)

import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Movie({ info }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{info.title}</h1>
        <p>Nota: {info.vote_average}</p>
        <p>{info.overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
          width="400"
        />

        <br />
        <Link href={"/search"}>Buscar filme</Link>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/movie/${context.params.id}`
  );
  const json = await res.json();

  return {
    props: {
      info: json.info,
    },
  };
}

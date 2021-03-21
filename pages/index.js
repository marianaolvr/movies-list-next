import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Filmes em destaque</h1>

        <ul>
          {list.map((movie) => (
            <li>
              <a href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  width="150"
                />
                <br />
                {movie.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending");
  const json = await res.json();

  return {
    props: {
      list: json.list,
    },
  };
}

//this page is using client-side rendering (csr) - means: normal react component

import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ list }) {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if (searchText !== "") {
      const result = await fetch(
        `http://localhost:3000/api/search?q=${searchText}`
      );
      const json = await result.json();
      setMovieList(json.list);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>

        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>

        <hr />

        <ul>
          {movieList.map(movie=>(
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

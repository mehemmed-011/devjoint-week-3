import { useEffect, useState } from "react";
import { getMovies } from "./services/api";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      let data = await getMovies(search);

      setMovies(data.Search || []);
    }

    fetchMovies();
  }, [search]);
  return (
    <>
      <header>
        <div className="header__container">Film Axtarışı</div>
      </header>

      <SearchBar search={search} setSearch={setSearch} />
      <ResultsList movies={movies} />
      <Pagination />
    </>
  );
}

export default App;

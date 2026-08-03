import { useEffect, useState } from "react";
import { getMovies } from "./services/api";
import useDebounce from "./hooks/useDebounce";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");
  let debouncedSearch = useDebounce(search, 500);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      if(!debouncedSearch.trim()){
        setMovies([]);
        setError("");
        return;
      }

      try {
        setLoading(true);
        setError("");

        let data = await getMovies(debouncedSearch);

        if(data.Response === "False"){
          setMovies([]);
          setError(data.Error);
        }
        else{
          setMovies(data.Search);
        }
      }
      catch (err){
        setError("Xəta baş verdi.");
        setMovies([]);
      }
      finally{
        setLoading(false);
      }
    }

    fetchMovies();
  }, [debouncedSearch]);
  return (
    <>
      <header>
        <div className="header__container">Film Axtarışı</div>
      </header>

      <SearchBar search={search} setSearch={setSearch} />
      <ResultsList movies={movies} loading={loading} error={error} />
      <Pagination />
    </>
  );
}

export default App;

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
  let [page, setPage] = useState(1);
  let [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      if(!debouncedSearch.trim()){
        setMovies([]);
        setError("");
        setTotalResults(0);
        return;
      }

      try {
        setLoading(true);
        setError("");

        let data = await getMovies(debouncedSearch, page);

        if(data.Response === "False"){
          setMovies([]);
          setError(data.Error);
          setTotalResults(0);
        }
        else{
          setMovies(data.Search);
          setTotalResults(Number(data.totalResults));
        }
      }
      catch (err){
        setError("Xəta baş verdi.");
        setMovies([]);
        setTotalResults(0);
      }
      finally{
        setLoading(false);
      }
    }

    fetchMovies();
  }, [debouncedSearch, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  return (
    <>
      <header>
        <div className="header__container">Film Axtarışı</div>
      </header>

      <SearchBar search={search} setSearch={setSearch} />
      <ResultsList movies={movies} loading={loading} error={error} />
      <Pagination page={page} setPage={setPage} totalResults={totalResults} />
    </>
  );
}

export default App;

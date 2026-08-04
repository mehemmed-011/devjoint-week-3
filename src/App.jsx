import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
  let [search, setSearch] = useState("");
  let debouncedSearch = useDebounce(search, 500);
  let [page, setPage] = useState(1);
  let { movies, loading, error, totalResults } = useFetch(debouncedSearch, page);

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

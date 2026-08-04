import { useEffect, useState } from "react";
import { getMovies } from "../services/api";

function useFetch(search, page) {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  let [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    let controller = new AbortController();

    async function fetchMovies() {
      if(!search.trim()){
        setMovies([]);
        setError("");
        setTotalResults(0);
        setLoading(false);
        return;
      }

      try{
        setLoading(true);
        setError("");

        let data = await getMovies(search, page, controller.signal);

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
      catch(err){
        if (err.name === "AbortError") return;

        setError("Xəta baş verdi.");
        setMovies([]);
        setTotalResults(0);
      }
      finally{
        setLoading(false);
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [search, page]);

  return{movies, loading, error, totalResults};
}

export default useFetch;
import Card from "./Card";

function ResultsList({ movies, loading, error }) {
  if (loading) {
    return <h2 className="error">Yüklənir...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  if (movies.length === 0) {
    return <h2 className="error">Film siyahısı boşdur!</h2>;
  }
  return (
    <>
      <div className="results-list">
        {movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default ResultsList;

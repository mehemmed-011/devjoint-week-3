function Card({ movie }) {
  return (
    <>
      <div className="card">
        <div className="card__img--box">
          <img className="card__img" src={movie.Poster} alt={movie.Title} />
        </div>
        <h3 className="card__title">{movie.Title}</h3>
        <p className="card__year">{movie.Year}</p>
        <span className="card__type">{movie.Type}</span>
      </div>
    </>
  );
}

export default Card;

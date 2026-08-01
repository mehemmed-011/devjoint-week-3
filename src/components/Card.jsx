function Card() {
  return (
    <>
      <div className="card">
        <div className="card__img--box">
          <img className="card__img" src="https://m.media-amazon.com/images/M/MV5BYTU5ZTA5YTYtOWM3ZC00MDc5LWI4ZDAtNDVhNmJmYWVlZjhkXkEyXkFqcGdeQXVyODc2MjMzNjM@._V1_SX300.jpg" alt="Card Title" />
        </div>
        <h3 className="card__title">Dexter: The First Season - Witnessed in Blood: A True Murder Investigation</h3>
        <p className="card__year">2014</p>
        <span className="card__type">movie</span>
      </div>
    </>
  );
}

export default Card;

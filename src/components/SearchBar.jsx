function SearchBar() {
  return (
    <>
      <div className="search__bar">
        <input className="search__input" type="text" placeholder="Film adı daxil edin. Məs: Dexter" />
        <button className="search__btn">Axtar</button>
      </div>
    </>
  );
}

export default SearchBar;
function SearchBar({ search, setSearch }) {
  return (
    <>
      <div className="search__bar">
        <input
          className="search__input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Film adı daxil edin. Məs: Dexter"
        />
        <button className="search__btn">Axtar</button>
      </div>
    </>
  );
}

export default SearchBar;

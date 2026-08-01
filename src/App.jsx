import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <header>
        <div className="header__container">
          Film Axtarışı
        </div>
      </header>

      <SearchBar />
      <ResultsList />
      <Pagination />
    </>
  );
}

export default App;
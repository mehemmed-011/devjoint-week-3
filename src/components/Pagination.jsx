function Pagination({ page, setPage, totalResults }) {
  let totalPages = Math.ceil(totalResults / 10);

  if(totalResults === 0){
    return;
  }
  return (
    <>
    <div className="pagination__box">
        <button className="pagination__prev" onClick={() => setPage(page - 1)} disabled={page === 1}>🢀</button>
        <p className="pagination__page">{page} / {totalPages || 1}</p>
        <button className="pagination__next" onClick={() => setPage(page + 1)} disabled={page === totalPages || totalPages === 0}>🢂</button>
      </div>
    </>
  );
}

export default Pagination;
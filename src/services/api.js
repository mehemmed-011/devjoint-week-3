let API_KEY = "948498ab";
let BASE_URL = "https://www.omdbapi.com/";

export async function getMovies(search, page = 1, signal) {
  let response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${search}&page=${page}`,
    { signal }
  );

  let data = await response.json();

  return data;
}
async function fetchMoviesJSON() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const jokeObject = await response.json();
  return jokeObject;
}
// fetchMoviesJSON().then(movies => {
//     console.log(movies); // fetched movies
// });
const jokeObject = await fetchMoviesJSON();
console.log(jokeObject.joke);

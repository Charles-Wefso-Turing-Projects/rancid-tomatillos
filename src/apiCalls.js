export const getMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something is amiss with the movie elves");
      }
    }
  );
};


export const getMovie = (id) => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((res) => res.json())
}
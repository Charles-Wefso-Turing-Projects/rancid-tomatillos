const url = "https://rancid-tomatillos.herokuapp.com/api/v2";

export const postUserMovieRating = (id, userRating, movieId) => {
  return fetch(`${url}/users/${id}/ratings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie_id: Number(movieId), rating: Number(userRating) }),
  })
  // .then(response => console.log(response.ok))
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(response.statusText)
      throw response.statusText;
  })
}

export const callUserData = (loginEmail, loginPassword) => {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
  })
  .then((response) => {
    if (!response.ok) {
      console.log(response.statusText)
      throw response.statusText;
    }
    return response.json();
  })
  
}

export const getAllMovies = () => {
  return fetch(`${url}/movies`)
  .then((res) => res.json())
}

export const getMovie = (id) => {
  return fetch(`${url}/movies/${id}`)
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


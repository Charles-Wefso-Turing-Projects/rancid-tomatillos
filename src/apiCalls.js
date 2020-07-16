const url = "https://rancid-tomatillos.herokuapp.com/api/v2";

export const deleteComment = async (id) => {
  const response = await fetch(`http://localhost:3002/api/v1/movies/comments/${id}`, {
    method: "DELETE" })
    const data = await response;
    return data
}

export const postComment = async (comment) => { 
  console.log(comment)
  const response = await fetch(`http://localhost:3002/api/v1/movies/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author: comment.author, comment: comment.comment, movie_id: comment.movie_id, id: comment.id}),
  })
    if (response.ok) {
      return await response.json();
    }
    console.log(response.statusText)
      throw response.statusText;
}

export const getComments = async () => {
  const response = await fetch(`http://localhost:3002/api/v1/movies/comments`);
  if (response.ok) {
    return await response.json();
  }
  console.log(response.statusText)
  throw response.statusText;
};

export const deleteUsersRating = async (userID, ratingID) => {
  const response = await fetch(`${url}/users/${userID}/ratings/${ratingID}`, {
    method: "DELETE" })
    const data = await response;
    return data
}

export const getUsersRatings = (id) => {
  return fetch(`${url}/users/${id}/ratings`)
  .then((res) => res.json())
}

export const postUserMovieRating = (id, userRating, movieId) => {
  return fetch(`${url}/users/${id}/ratings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie_id: Number(movieId), rating: Number(userRating) }),
  })
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


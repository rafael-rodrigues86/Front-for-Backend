const fetchMovies = async () => {
  const response = await fetch("http://localhost:3000/movies");
  const movies = await response.json();
  return movies;
};

const searchMovies = async (searchTerm) => {
  try {
    if (searchTerm) {
      const response = await fetch(
        `http://localhost:3000/movies/search/${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    }
    return [];
  } catch (error) {
    console.error("Erro ao buscar filmes", error);
    return [];
  }
};

const createMovie = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error("Erro ao criar o produto: ", error);
    return false;
  }
};

const deleteMovie = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Falha ao deletar o filme.");
    }

    return true;
  } catch (error) {
    console.error("Erro ao deletar o filme: ", error);
    return false;
  }
};

const changeMovieData = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Falha ao atualizar o filme.");
    }

    const updatedMovie = await response.json();
    return updatedMovie;
  } catch (error) {
    console.error("Erro ao atualizar o filme: ", error);
    return false;
  }
};

export { fetchMovies, searchMovies, createMovie, deleteMovie, changeMovieData };

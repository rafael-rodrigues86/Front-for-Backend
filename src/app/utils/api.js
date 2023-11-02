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

export { fetchMovies, searchMovies, createMovie };

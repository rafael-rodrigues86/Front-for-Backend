// pages/products.js
import React, { useContext, useEffect, useState } from "react";
import { fetchMovies, changeMovieData } from "@/app/utils/api";
import { CartContext } from "@/app/contexts/CartContext";
import Appbar from "@/app/components/Appbar";
import Bottom from "@/app/components/Bottom";
import Drawer from "@/app/components/Drawer";
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
} from "@/app/styles/ProductsPage";
import "tailwindcss/tailwind.css";

const MoviesPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [movies, setMovies] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    getMovies();
  }, []);

  const [editingMovieId, setEditingMovieId] = useState(null);
  const [newGenre, setNewGenre] = useState("");
  const [newMetascore, setNewMetascore] = useState("");

  const handleEditMovie = (movie) => {
    setEditingMovieId(movie.id);
    setNewGenre(movie.Genre);
    setNewMetascore(movie.Metascore);
  };

  const handleCancelEdit = () => {
    setEditingMovieId(null);
    setNewGenre("");
    setNewMetascore("");
  };

  const handleSubmitEdit = async () => {
    const success = await changeMovieData(editingMovieId, {
      Genre: newGenre,
      Metascore: newMetascore,
    });
    if (success) {
      setEditingMovieId(null);
    } else {
    }
  };

  return (
    <main>
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <ProductContainer>
                <ProductImage src={movie.Poster} alt={movie.Title} />
                <ProductTitle>{movie.Title}</ProductTitle>
                <ProductTitle>{movie.Genre}</ProductTitle>
                <ProductPrice>{movie.Metascore}</ProductPrice>
                {/* <button onClick={() => handleEditMovie(movie)}>
                  Alterar dados
                </button>
                {editingMovieId === movie.id && (
                  <div>
                    <label htmlFor="genre">Alterar Gênero:</label>
                    <input
                      type="text"
                      id="genre"
                      value={newGenre}
                      onChange={(e) => setNewGenre(e.target.value)}
                    />

                    <label htmlFor="metascore">Alterar Score:</label>
                    <input
                      type="text"
                      id="metascore"
                      value={newMetascore}
                      onChange={(e) => setNewMetascore(e.target.value)}
                    />

                    <button onClick={handleSubmitEdit}>Confirmar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </div>
                )} */}

                <button
                  onClick={() => handleEditMovie(movie)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-150 mt-2"
                >
                  Alterar dados
                </button>
                {editingMovieId === movie.id && (
                  <div className="mt-4">
                    <label
                      htmlFor="genre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Alterar Gênero:
                    </label>
                    <input
                      type="text"
                      id="genre"
                      value={newGenre}
                      onChange={(e) => setNewGenre(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />

                    <label
                      htmlFor="metascore"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      Alterar Score:
                    </label>
                    <input
                      type="text"
                      id="metascore"
                      value={newMetascore}
                      onChange={(e) => setNewMetascore(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />

                    <button
                      onClick={handleSubmitEdit}
                      className="bg-green-500 text-gray-800 px-4 py-2 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition ease-in-out duration-150 mt-4"
                    >
                      Confirmar
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition ease-in-out duration-150 mt-4 ml-2"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </ProductContainer>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MoviesPage;

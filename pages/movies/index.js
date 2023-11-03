// pages/products.js
import React, { useContext, useEffect, useState } from "react";
import { fetchMovies, deleteMovie } from "@/app/utils/api";
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

  const handleDeleteMovie = async (id) => {
    const success = await deleteMovie(id);
    if (success) {
      setMovies(movies.filter((movie) => movie.id !== id));
    } else {
      console.error("Erro ao deletar o filme.");
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
                <ProductPrice>{movie.Metascore}</ProductPrice>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  Delete Movie
                </button>
              </ProductContainer>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MoviesPage;

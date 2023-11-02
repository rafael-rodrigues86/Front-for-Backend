// pages/products.js
import React, { useContext, useEffect, useState } from "react";
import { fetchMovies } from "@/app/utils/api";
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
                <AddToCartButton onClick={() => addToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </ProductContainer>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MoviesPage;

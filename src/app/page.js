"use client";
import "tailwindcss/tailwind.css";
import Appbar from "./components/Appbar";
import Bottom from "./components/Bottom";
import Drawer from "./components/Drawer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/app/utils/api";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const search = async () => {
      const results = await searchMovies(searchTerm);
      setSearchResults(results);
    };

    search();
  }, [searchTerm]);

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div className="w-full flex justify-center py-8">
        <input
          type="text"
          placeholder="Buscar filmes"
          className="bg-gray-200 border border-gray-300 rounded-full p-2 w-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <div className="bg-white p-4 shadow-md">
                <img
                  src={movie.Poster}
                  className="w-16 h-16 rounded-full"
                ></img>
                <p className="mt-2">{movie.Title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

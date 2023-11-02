// components/CategoriesSection.js
import React, { useState, useEffect } from 'react';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Categorias</h2>
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <div key={index} className="m-4">
              <p className="text-base md:text-lg">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

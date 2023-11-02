// components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Bem-vindo ao nosso app de ecommerce!
        </h1>
        <p className="text-lg md:text-xl">
          Encontre as melhores ofertas aqui.
        </p>
      </div>
    </section>
  );
};

export default Banner;

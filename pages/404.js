import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600">
        A página que você está procurando não foi encontrada.
      </p>
    </div>
  );
};

export default NotFoundPage;

// styles/styled.js
import styled from 'styled-components';

export const ProductContainer = styled.div`
  /* Adicione estilos do Tailwind ou CSS personalizado aqui */
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

export const ProductImage = styled.img`
  /* Estilos para a imagem do produto */
  width: 100%;
  max-width: 200px; /* Ajuste conforme necessário */
  height: auto;
`;

export const ProductTitle = styled.p`
  /* Estilos para o título do produto */
  font-weight: bold;
`;

export const ProductPrice = styled.p`
  /* Estilos para o preço do produto */
  color: green;
`;

export const AddToCartButton = styled.button`
  /* Estilos para o botão "Add to Cart" */
  background-color: #3490dc;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #2779bd;
  }
`;

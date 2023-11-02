import styled from 'styled-components';

export const CartItemContainer = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

export const CartItemImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const CartItemTitle = styled.p`
  font-weight: bold;
`;

export const CartItemPrice = styled.p`
  color: green;
`;

export const RemoveFromCartButton = styled.button`
  background-color: #e53e3e;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #c53030;
  }
`;

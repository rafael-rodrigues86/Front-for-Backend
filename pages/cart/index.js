import React, { useContext, useState } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import {
  CartItemContainer,
  CartItemImage,
  CartItemTitle,
  CartItemPrice,
  RemoveFromCartButton,
} from '@/app/styles/CartPage';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '@/app/contexts/ThemeContext';  // Importando o ThemeProvider


const CartPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className={`app-container ${theme ? 'dark' : 'light'}`}>  {/* Aplicando o tema à div principal */}
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItemContainer>
              <CartItemImage src={item.image} alt={item.title} />
              <CartItemTitle>{item.title}</CartItemTitle>
              <CartItemPrice>Price: {item.price}</CartItemPrice>
              <p>Quantity: {item.quantity}</p>
              <RemoveFromCartButton onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </RemoveFromCartButton>
            </CartItemContainer>
          </li>
        ))}
      </ul>
      <Bottom></Bottom>
    </div>
  );
};

export default CartPage;
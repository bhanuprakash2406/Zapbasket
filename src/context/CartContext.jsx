import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState({});

  const addItem = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeItem = (id) => {
  setCart(prev => {

    const updated = { ...prev };

    if (updated[id] > 1) {
      updated[id] -= 1;
    } else {
      delete updated[id]; // remove product from cart
    }

    return updated;
  });
};
const clearCart = () => {
  setCart({});
};

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
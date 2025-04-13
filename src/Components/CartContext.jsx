import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = cart.find((i) => i.id === item.id);
    if (exists) {
      toast.error("Bu oldindan mavjud 😅");
    } else {
      setCart([...cart, item]);
      toast.success("Cardga qo'shildi ✅");
    }
  };
  const deleteItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};


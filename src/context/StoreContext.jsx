import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Create the context with an initial value of null
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = prev[itemId] - 1;
      if (newCount <= 0) {
        // If quantity is zero or less, remove the item from the cart
        const { [itemId]: _, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [itemId]: newCount };
      }
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        let itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[itemId];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} {/* Render any child components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

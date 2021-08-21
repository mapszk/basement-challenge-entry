import {createContext, FC, useEffect, useState} from "react";

export interface CartProduct {
  name: string;
  id: number;
  unitPrice: number;
  price: number;
  shortDesc: string;
  imgUrl: string;
  quantity: number;
  size: string;
}

export const CartContext = createContext<any>(null);

const CartContextProvider: FC = ({children}) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null)
      setCart(JSON.parse(localStorage.getItem("cart") as string));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

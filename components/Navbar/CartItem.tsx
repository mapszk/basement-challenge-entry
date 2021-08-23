/* eslint-disable @next/next/no-img-element */
import {FC, useEffect, useState} from "react";

import {CartProduct} from "../../contexts/CartContext";
import {useCartContext} from "../../hooks/useCartContext";
import {formatPrice} from "../../util/formatPrice";

const sizes = ["S", "M", "L", "XL"];

const CartItem: FC<CartProduct> = ({name, shortDesc, imgUrl, price, id, quantity, size}) => {
  const {setCart} = useCartContext();
  const [quantityProduct, setQuantityProduct] = useState<number>(quantity);
  const [sizeProduct, setSizeProduct] = useState<string>(size);
  const handleDeleteFromCart = () => {
    setCart((cart: CartProduct[]) => cart.filter((prod) => prod.id !== id));
  };

  useEffect(() => {
    setCart((cart: CartProduct[]) =>
      cart.map((prod) =>
        prod.id === id
          ? {
              ...prod,
              price: prod.unitPrice * quantityProduct,
              size: sizeProduct,
              quantity: quantityProduct,
            }
          : prod,
      ),
    );
  }, [quantityProduct, sizeProduct]);

  return (
    <div className="relative flex max-h-48 w-full border-2 p-2 mb-2">
      <button
        className="absolute border-t-2 border-white border-r-2 top-0 right-0 bg-white flex justify-center items-center text-black w-7 h-7"
        onClick={handleDeleteFromCart}
      >
        X
      </button>
      <div className="w-2/6 md:w-1/4 flex justify-center items-center bg-gradient-to-t from-gray-900 mr-4">
        <img alt="Product image" className="object-contain h-full" src={imgUrl} />
      </div>
      <div className="w-4/6 md:w-3/4 flex flex-col justify-between">
        <h2 className="uppercase text-xl">{name}</h2>
        <h2 className="text-gray-600 mb-2">{shortDesc}</h2>
        <div className="flex items-center md:mt-auto mb-2">
          <h2 className="mr-2">QUANTITY: </h2>
          <div className="flex justify-between w-16 rounded-full border-2 px-2">
            <button
              className="disabled:opacity-25"
              disabled={quantityProduct === 1}
              onClick={() => setQuantityProduct((q) => q - 1)}
            >
              -
            </button>
            <h2>{quantityProduct}</h2>
            <button onClick={() => setQuantityProduct((q) => q + 1)}>+</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex items-center">
            <h2 className="mr-2">SIZE: </h2>
            <div className="flex justify-between">
              {sizes.map((SIZE, index) => (
                <button
                  key={index}
                  className="disabled:opacity-100 opacity-25 text-center rounded-full flex justify-center items-center border-2 w-7 h-7"
                  disabled={size === SIZE}
                  onClick={() => setSizeProduct(SIZE)}
                >
                  {SIZE}
                </button>
              ))}
            </div>
          </div>
          <h2 className="text-2xl mt-2 md:mt-0 md:ml-auto">{formatPrice(price)}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

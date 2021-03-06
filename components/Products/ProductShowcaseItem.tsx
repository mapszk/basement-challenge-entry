/* eslint-disable @next/next/no-img-element */
import {FC} from "react";

import {CartProduct} from "../../contexts/CartContext";
import {useCartContext} from "../../hooks/useCartContext";
import {Product} from "../../product/types";
import {formatPrice} from "../../util/formatPrice";

const ProductShowcaseItem: FC<Product> = ({name, price, imgUrl, shortDesc, id}) => {
  const {cart, setCart} = useCartContext();
  const handleAddToCart = () => {
    if (cart.some((item: CartProduct) => item.id === id)) return;
    else
      setCart((cart: CartProduct[]) => [
        ...cart,
        {name, unitPrice: price, imgUrl, shortDesc, id, price: price, quantity: 1, size: "M"},
      ]);
  };

  return (
    <div className="relative group h-96 md:h-product-height">
      <div className="invisible bg-opacity-0 transition duration-500 group-hover:visible absolute w-full h-90% bg-black bg-opacity-60">
        <div className="w-full h-full relative flex justify-center items-center">
          <h1 className="text-3xl cursor-pointer z-10" onClick={handleAddToCart}>
            {cart.some((item: CartProduct) => item.id === id) ? "IN CART" : "ADD TO CART"}
          </h1>
          <img alt="World" className="absolute w-32 opacity-25" src="/assets/world.svg" />
        </div>
      </div>
      <div className="flex justify-center items-center h-90% border-b-2 bg-gradient-to-t from-grayGradient">
        <img alt="Product image" className="object-contain h-full max-w-full" src={imgUrl} />
      </div>
      <div className="h-10% flex items-end justify-between">
        <h2 className="text-xl lg:text-2xl">{name}</h2>
        <h2 className="text-xl lg:text-2xl">{formatPrice(price)}</h2>
      </div>
    </div>
  );
};

export default ProductShowcaseItem;

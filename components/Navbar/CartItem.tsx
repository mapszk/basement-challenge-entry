/* eslint-disable @next/next/no-img-element */
import {FC, useState} from "react";

import {formatPrice} from "../../util/formatPrice";

const sizes = ["S", "M", "L", "XL"];

interface Props {
  name: string;
  shortDesc: string;
  imgUrl: string;
  price: number;
}

const CartItem: FC<Props> = ({name, shortDesc, imgUrl, price}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>("M");

  return (
    <div className="relative flex max-h-48 w-full border-2 p-2 mb-2">
      <button className="absolute border-t-2 border-white border-r-2 top-0 right-0 bg-white flex justify-center items-center text-black w-7 h-7">
        X
      </button>
      <div className="w-2/6 md:w-1/4 flex justify-center items-center bg-gradient-to-t from-gray-900 mr-4">
        <img alt="Product image" className="object-contain h-full" src={imgUrl} />
      </div>
      <div className="w-4/6 md:w-3/4 flex flex-col justify-between">
        <h2 className="uppercase text-xl">{name}</h2>
        <h2 className="text-gray-600 mb-2">{shortDesc}</h2>
        <div className="flex items-center mb-2">
          <h2 className="mr-2">QUANTITY: </h2>
          <div className="flex justify-between w-24 rounded-full border-2 px-4">
            <button
              className="disabled:opacity-25"
              disabled={quantity === 1}
              onClick={() => setQuantity((q) => q - 1)}
            >
              -
            </button>
            <h2>{quantity}</h2>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="mr-2">SIZE: </h2>
          <div className="flex justify-between">
            {sizes.map((SIZE, index) => (
              <button
                key={index}
                className="disabled:opacity-100 opacity-25 text-center rounded-full flex justify-center items-center border-2 w-7 h-7"
                disabled={size === SIZE}
                onClick={() => setSize(SIZE)}
              >
                {SIZE}
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-2xl mt-2">{formatPrice(price)}</h2>
      </div>
    </div>
  );
};

export default CartItem;

import {FC} from "react";

import CartItem from "./CartItem";

const carrito = [
  {name: "remera", shortDesc: "some shirt idk xD", price: 9, imgUrl: "/products/shirt.png"},
  {name: "remera", shortDesc: "some shirt idk xD", price: 9, imgUrl: "/products/shirt.png"},
  {name: "remera", shortDesc: "some shirt idk xD", price: 9, imgUrl: "/products/shirt.png"},
  {name: "remera", shortDesc: "some shirt idk xD", price: 9, imgUrl: "/products/shirt.png"},
  {name: "remera", shortDesc: "some shirt idk xD", price: 9, imgUrl: "/products/shirt.png"},
];

const CartBox: FC = () => {
  return carrito.length ? (
    <div className="md:overflow-y-scroll">
      {carrito.map((item, index) => (
        <CartItem
          key={index}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
          shortDesc={item.shortDesc}
        />
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center h-24">
      <h1>Your cart is empty</h1>
    </div>
  );
};

export default CartBox;

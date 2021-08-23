/* eslint-disable @next/next/no-img-element */
import {FC} from "react";

import {CartProduct} from "../../contexts/CartContext";
import {useCartContext} from "../../hooks/useCartContext";
import {formatPrice} from "../../util/formatPrice";

import CartItem from "./CartItem";

interface Props {
  isVisible: boolean;
  setIsVisible: (v: boolean) => void;
}

const Cart: FC<Props> = ({isVisible, setIsVisible}) => {
  const {cart} = useCartContext();
  const handleCheckout = () => {
    return console.info(`YOUR BUY: \n ${JSON.stringify(cart, null, "\t")}`);
  };
  const handleClick = () => {
    setIsVisible(false);
    document.body.style.overflow = "visible";
  };
  const cartClasses = [
    "fixed",
    "flex",
    "flex-col",
    "p-4",
    "bg-black",
    "overflow-auto",
    "transform",
    "transition-transform",
    "duration-500",
    "z-50",
    "w-screen",
    "h-screen",
    "inset-0",
    "md:p-0",
    "md:overflow-visible",
    "md:border-b-2",
    "md:border-l-2",
    "md:w-menu",
    "md:h-menu",
    "md:top-0",
    "md:left-auto",
    isVisible && "translate-x-0",
    !isVisible && "translate-x-menu",
  ];
  const bgClasses = [
    "transition-background",
    "duration-500",
    "inset-0",
    "bg-black",
    "fixed",
    "z-50",
    isVisible && "bg-opacity-50",
    isVisible && "visible",
    !isVisible && "invisible",
    !isVisible && "bg-opacity-0",
  ];

  return (
    <div className={bgClasses.join(" ")}>
      <div className={cartClasses.join(" ")}>
        <div className="flex flex-col h-full">
          <div className="flex-grow-1 md:p-4">
            <h2
              className="table ml-auto text-lg text-right cursor-pointer mb-2"
              onClick={handleClick}
            >
              {"> CLOSE"}
            </h2>
            <img
              alt="Your cart"
              className="mb-4 sm:max-h-48 mx-auto md:hidden"
              src="/assets/your-cart.svg"
            />
            <img
              alt="Your cart"
              className="hidden mb-4 md:block"
              src="/assets/your-cart-desktop.svg"
            />
          </div>
          <div className="flex-grow-4 md:px-4 md:mr-4 md:mb-2 md:overflow-y-auto">
            {cart.length ? (
              cart.map((item: CartProduct) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  shortDesc={item.shortDesc}
                  size={item.size}
                  unitPrice={item.unitPrice}
                />
              ))
            ) : (
              <div className="flex text-2xl justify-center items-center h-48">
                <h1>Your cart is empty</h1>
              </div>
            )}
          </div>
          <div className="flex-grow-1 w-full flex flex-col md:flex-row mt-auto">
            <div className="md:w-3/4 md:px-4 items-center md:border-t-2 md:border-r-2 text-2xl flex justify-between">
              <h1>TOTAL:</h1>
              <h1>
                {formatPrice(
                  cart
                    .map((prod: CartProduct) => prod.price)
                    .reduce((acc: number, value: number) => acc + value, 0),
                )}
              </h1>
            </div>
            <img
              alt="Checkout"
              className="cursor-pointer md:w-1/4 md:p-4 max-h-16 pt-2 mb-2 md:mb-0 border-t-2"
              src="/assets/checkout.svg"
              onClick={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

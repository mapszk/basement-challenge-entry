/* eslint-disable @next/next/no-img-element */
import {FC, useState} from "react";
import Link from "next/link";

import {useCartContext} from "../../hooks/useCartContext";

import Cart from "./Cart";

const Navbar: FC = () => {
  const {cart} = useCartContext();
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const handleClick = () => {
    setCartVisible(true);
    if (window.innerWidth <= 768) document.body.style.overflow = "hidden";
  };

  return (
    <>
      <header className="my-4 h-10 md:h-12 flex relative overflow-hidden md:overflow-visible">
        <Link href="/" passHref={true}>
          <img alt="Logo" className="cursor-pointer py-2 h-full hidden md:block" src="/logo.svg" />
        </Link>
        <Link href="/" passHref={true}>
          <img alt="Logo" className="text-5xl md:hidden" src="/mobile-logo.svg" />
        </Link>
        <img
          alt="Items"
          className="absolute hidden lg:block left-2/4 transform -translate-x-2/4 py-2 h-full"
          src="/assets/items-navbar.svg"
        />
        <button
          className="h-full ml-auto border-2 rounded-full px-6 hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          {cart.length ? `CART(${cart.length})` : "CART"}
        </button>
        <Cart isVisible={cartVisible} setIsVisible={setCartVisible} />
      </header>
    </>
  );
};

export default Navbar;

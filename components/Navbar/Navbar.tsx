/* eslint-disable @next/next/no-img-element */
import {FC} from "react";

const Navbar: FC = () => {
  return (
    <header className="my-4 h-10 md:h-12 flex relative">
      <img alt="Logo" className="py-2 h-full hidden md:block" src="/logo.svg" />
      <img alt="Logo" className="text-5xl md:hidden" src="/mobile-logo.svg" />
      <img
        alt="Items"
        className="absolute hidden lg:block left-2/4 transform -translate-x-2/4 py-2 h-full"
        src="/assets/items-navbar.svg"
      />
      <button className="h-full ml-auto border-2 rounded-full px-6">CART</button>
    </header>
  );
};

export default Navbar;

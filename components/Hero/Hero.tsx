/* eslint-disable @next/next/no-img-element */
import {FC} from "react";

const Hero: FC = () => {
  return (
    <section className="relative">
      <img alt="Header" src="/header.svg" />
      <img
        alt="Asterisk"
        className="hidden md:block animate-spin-slow absolute w-24 lg:w-28 left-9 -bottom-12"
        src="/assets/asterisk.svg"
      />
      <img
        alt="Asterisk"
        className="hidden md:block animate-spin-slow absolute w-24 lg:w-28 right-14 bottom-4"
        src="/assets/asterisk-2.svg"
      />
      <div className="py-1 md:py-2 mt-6 border-t-2 border-b-2 whitespace-nowrap overflow-hidden">
        <h1 className="text-2xl md:text-4xl">{"A man can't have enough basement. swag -"}</h1>
      </div>
    </section>
  );
};

export default Hero;

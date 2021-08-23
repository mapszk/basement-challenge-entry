/* eslint-disable @next/next/no-img-element */
import {FC} from "react";

const Hero: FC = () => {
  return (
    <>
      <section className="relative mb-6">
        <img alt="Header" className="mx-auto" src="/header.svg" />
        <img
          alt="Asterisk"
          className="z-10 hidden md:block animate-spin-slow absolute w-24 lg:w-28 left-9 -bottom-12"
          src="/assets/asterisk.svg"
        />
        <img
          alt="Asterisk"
          className="z-10 hidden md:block animate-spin-slow absolute w-24 lg:w-28 right-14 bottom-4"
          src="/assets/asterisk-2.svg"
        />
        <div className="flex py-1 md:py-2 mt-6 border-t-2 border-b-2 whitespace-nowrap overflow-hidden">
          <h1 className="animate-ticker text-2xl md:text-4xl" id="ticker">
            {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
          </h1>
          <h1 className="animate-ticker2 text-2xl md:text-4xl" id="ticker2">
            {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
          </h1>
        </div>
      </section>
      <style jsx>{`
        #ticker {
          animation-delay: -40s;
        }
        #ticker2 {
          animation-delay: -20s;
        }
      `}</style>
    </>
  );
};

export default Hero;

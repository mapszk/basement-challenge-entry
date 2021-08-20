import type {NextPage} from "next";

import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProductShowcase from "../components/Products/ProductShowcase";

const Home: NextPage = () => {
  return (
    <div className="w-11/12 max-w-80 mx-auto">
      <Navbar />
      <Hero />
      <ProductShowcase />
    </div>
  );
};

export default Home;

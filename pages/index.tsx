import type {NextPage} from "next";

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProductShowcase from "../components/Products/ProductShowcase";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Footer />
    </>
  );
};

export default Home;

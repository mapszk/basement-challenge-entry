import type {NextPage} from "next";

import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="w-11/12 max-w-80 mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;

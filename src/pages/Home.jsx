import React from "react";
import Categories from "../components/Categories/Categories";
import Headphone from "../components/Headphones/Headphone";
import Navbar from "../components/Navbar/Navbar";
import Zx9 from "../components/zx9/Zx9";
import Zx7 from "../components/zx7/Zx7";
import Yx1 from "../components/yx1/Yx1";

const Home = () => {
  return (
    <>
      <Navbar />
      <Headphone />
      <Categories />
      <Zx9 />
      <Zx7 />
      <Yx1/>
    </>
  );
};

export default Home;
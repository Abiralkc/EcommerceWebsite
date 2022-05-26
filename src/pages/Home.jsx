import React from "react";
import Categories from "../components/Categories/Categories";
import Description from "../components/Description/Description";
import Headphone from "../components/Headphones/Headphone";
import Navbar from "../components/Navbar/Navbar";
import Yx1 from "../components/yx1/Yx1";
import Zx7 from "../components/zx7/Zx7";
import Zx9 from "../components/zx9/Zx9";


const Home = () => {
  return (
    <>
      <Navbar />

      <Headphone/>
      <Categories />
      <Zx9 />
      <Zx7 />
      <Yx1 />
      <Description/>
    </>
  );
};

export default Home;
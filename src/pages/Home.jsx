import React from "react";
import Categories from "../components/Categories/Categories";
import Headphone from "../components/Headphones/Headphone";
import Navbar from "../components/Navbar/Navbar";
import Zx9 from "../components/zx9/Zx9";

const Home = () => {
  return (
    <>
      <Navbar />
      <Headphone />
      <Categories />
      <Zx9 />
    </>
  );
};

export default Home;
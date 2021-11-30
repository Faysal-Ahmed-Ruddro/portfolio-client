import React from "react";
import Projects from "../Projects/Projects";
import About  from "../About/About"
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="homepage">
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
    </div>
  );
};

export default Home;

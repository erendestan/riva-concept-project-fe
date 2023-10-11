import React from "react";
import NavbarRiva from "../components/Navbar";
import Background from "../components/Background";
import Carrousel from "../components/Carrousel";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <NavbarRiva></NavbarRiva>
      <Background></Background>
      <AboutUs></AboutUs>
      <Carrousel></Carrousel>
    </>
  );
};

export default Home;

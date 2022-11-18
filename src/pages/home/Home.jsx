import React from "react";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Opportunities from "../../components/opportunities/Opportunities";
import "./Home.scss"
const Home = () => {
  return <div className="home">
    <Header/>
    <About/>
    <Opportunities/>
    <Footer/>
  </div>;
};

export default Home;

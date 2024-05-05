import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import PricingPlan from "./PricingPlan";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero/>
        <About/>
        <BMI/>
        <PricingPlan/>
        <Services/>
        <Banner/>
        <Trainers/>
        <Popular/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import AOS from "aos";
import AboutSection from "./AboutSection/AboutSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import CarListSection from "./CarLIstSection/CarListSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const theme = localStorage.getItem("theme");
  return (
    <div>
      <Hero theme={theme} />
      <AboutSection />
      <ServicesSection />
      <CarListSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;

// src/layouts/HomeLayout.jsx
import React from "react";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection"; // Corrected import

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <ProjectsSection />
    </>
  );
};

export default HomeLayout;

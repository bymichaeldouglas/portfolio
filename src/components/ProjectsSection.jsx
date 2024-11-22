// src/components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "JSON Query Tool",
    description: "A tool to simplify building JSON queries.",
    imageUrl: `${process.env.PUBLIC_URL}/TechTool.png`, // Use PUBLIC_URL for correct path resolution
    link: "https://main.d2zzehz4b8c8cm.amplifyapp.com/",
  },
  {
    title: "JQuery React Version",
    description: "IN-PROGRESS",
    imageUrl: `${process.env.PUBLIC_URL}/JQ.png`, // Use PUBLIC_URL for correct path resolution
    link: "${process.env.PUBLIC_URL}/jq-tt",
  },
  {
    title: "Local Weather Intigration",
    description: "A sleek portfolio built with React and Tailwind.",
    imageUrl: `${process.env.PUBLIC_URL}/weathericon.png`, // Use PUBLIC_URL for correct path resolution
    link: "${process.env.PUBLIC_URL}/weather-feature-details",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

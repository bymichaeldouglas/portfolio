// src/components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Vision Automation System",
    description: "An advanced system to automate vision inspections.",
    imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    link: "https://github.com/example/vision-system",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio built with React and Tailwind.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://example.com/portfolio",
  },
  {
    title: "Data Query Tool",
    description: "A tool to simplify building JSON queries.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://github.com/example/data-query-tool",
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

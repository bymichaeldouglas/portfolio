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
    link: "portfolio/jq-tt", // Relative link to portfolio/jq-tt page
  },
  {
    title: "Local Weather Intigration",
    description: "A sleek portfolio built with React and Tailwind.",
    imageUrl: `${process.env.PUBLIC_URL}/weathericon.png`, // Use PUBLIC_URL for correct path resolution
    link: "portfolio/weather-feature-details", // Relative link to portfolio/weather-feature-details page
  },
];


const ProjectCard = ({ title, description, imageUrl, link }) => {
  const isInternalLink = link.startsWith("portfolio/");

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      {isInternalLink? (
        <Link to={link} className="hover:text-indigo-400">
          View Project
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
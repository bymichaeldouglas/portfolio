// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

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
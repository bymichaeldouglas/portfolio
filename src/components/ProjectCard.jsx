// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  console.log(imageUrl)
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-indigo-500 hover:text-indigo-400"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

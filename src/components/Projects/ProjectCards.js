import React, { useState } from 'react';

const ProjectCard = ({ project, onHover, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    padding: '20px', // Add padding around the card
    backgroundColor: '#fff', // Change the background color to white
    marginTop: '200px', // Add margin to the top of the card
  };

  const imageStyle = {
    width: '100%',
    height: 'auto'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img style={imageStyle} src={isHovered ? project.hoverImg : project.initialImg} alt="project" />
      {isHovered && <h2>{project.details}</h2>}
    </div>
  );
};

export default ProjectCard;
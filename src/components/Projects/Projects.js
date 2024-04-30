import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import initial1 from './1out.jpeg'; // Import the image
import initial2 from './2out.jpeg';
import hover1 from './1in.jpeg'; // Import the image
import hover2 from './2in.jpeg';
import { Helmet } from 'react-helmet';


const projectData = [
  { id: 1, initialImg: initial1, hoverImg: hover1, details: 'Project 1 details...' },
  { id: 2, initialImg: initial2, hoverImg: hover2, details: 'Project 1 details...'},
  // Add more projects as needed...
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container fluid className="project-section">
      <Helmet>
        <style>{'body { background-color: #fff; }'}</style>
      </Helmet>
      <Row>
        {projectData.map((project) => (
          <Col key={project.id}>
            <ProjectCard
              project={project}
              onHover={() => setSelectedProject(project)}
              onClick={() => setSelectedProject(project)}
            />
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <div>
          <h2>{selectedProject.details}</h2>
        </div>
      )}
    </Container>
  );
}

export default Projects;
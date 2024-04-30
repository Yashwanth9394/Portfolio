import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resume.css';
import resume from './YashwanthKrishna_Porandla.pdf'; // Import the resume



const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <Row className="resume-header">
        <Col md={15} className="contact-info"> {/* Full-width column for header */}
          <h1 className="name">YASHWANTH KRISHNA</h1>
          <p>Yashwanth753@gmail.com</p>
          <a href={resume} download className="btn btn-primary">DOWNLOAD PDF</a> {/* Use standard Bootstrap button */}
        </Col>
      </Row>

      <Row> {/* Row containing the three columns */}
        <Col md={3} className="skills"> {/* Use md={4} for each column, ensuring a total of 12 */}
          <h2>SKILLS</h2>
          <ul>
            <li>Python</li>
            <li>GO Lang</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>GraphQL</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Col>

        <Col md={3} className="tools"> {/* Tools column */}
          <h2>DEVELOPER TOOLS</h2>
          <ul>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>AWS EC2</li>
            <li>AWS S3</li>
            <li>Firebase</li>
            <li>Springboot</li>
          </ul>
        </Col>

        <Col md={3} className="technologies"> {/* Technologies column */}
          <h2>TECHNOLOGIES/ FRAMEWORKS</h2>
          <ul>
            <li>Flask</li>
            <li>Django</li>
            <li>OpenMP</li>
            <li>Pyspark</li>
            <li>GitHub</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;

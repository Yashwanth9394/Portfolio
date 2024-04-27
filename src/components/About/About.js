import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from './AboutCard'; // Corrected import statement
import myPicture from '../../Assets/pic.jpeg'; // Corrected path to the image file

function About() {
  return (
    <Container fluid className="about-section">
      <Container> {/* Outer container */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",textAlign:'left' }}>
              Hello!
            </h1>
            <AboutCard /> {/* Include your component */}
          </Col>
          <Col
            md={5} // The column for the picture
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              paddingBottom:"250px" // Center the image vertically
            }}
          >
            <img
              src={myPicture} // Reference to your image
              alt="My Picture"
              style={{
                width: "100%", // Adjust the width as needed
                height: "auto", // Maintain aspect ratio
                maxWidth: "300px", // Set a maximum width if needed
                borderRadius: "10%", // Optional: Make the image round
              }}
            />
          </Col>

        </Row>
      </Container> {/* Close the inner container */}
    </Container>
  );
}

export default About;

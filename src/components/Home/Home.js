import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import Particle from '../Particle';
import homeMain from '../../Assets/home-main.svg'; // Import the image
// Define keyframes for the scrolling effect
const scrollText = keyframes`
  0%, 30% { transform: translateY(0); }
  35%, 64% { transform: translateY(-33%); }
  69%, 97% { transform: translateY(-66%); }
  99%, 100% { transform: translateY(-100%); } // Ensures continuous loop
`;

// Styled component for the scrollable text box
const ScrollBox = styled.div`
  width: 400px; /* Adjust the width as needed */
  height: 55px; /* Adjust the height as needed */
  overflow: hidden;
  position: relative;
  background-color: black;
  color: white;
  text-align: center;
  padding-left: 5px; /* Optional padding for text alignment */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Set font family */
  font-size: 40px;
  .inner {
    position: absolute;
    animation: ${scrollText} 4.5s linear infinite; // Control the speed and loop
  }

  .text {
    height: 50px; /* Match the height of the ScrollBox */
    line-height: 50px; /* Vertical alignment of text */
    font-weight: bold; /* Apply bold font */
  }
`;
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                
                <strong className="main-name"> YASHWANTH KRISHNA</strong>
              </h1>

              <div style={{ paddingLeft: 50, paddingTop: 10, display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: 10, fontSize: '2.5em', paddingRight: 5, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>I'm a</span>
              <ScrollBox>
                  <div className="inner">
                    <div className="text">Software Developer</div>
                    <div className="text">Freelancer</div>
                    <div className="text">Student</div>
                  </div>
                </ScrollBox>
              </div>
              {/* <img src={homeMain} alt="Home Main" /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
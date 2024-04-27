import React from 'react';
import { Container } from 'react-bootstrap'; // Ensure you're importing Container
import './ContactMe.css'; // Ensure the correct CSS file is imported

const ContactMe = () => {
  return (
    <div className="contactme-section"> {/* Ensure this is the main container */}
      <Container fluid> {/* Using Bootstrap's Container */}
        <div className="contact-container"> {/* Ensure correct class name */}
          <h1 className="name">YASHWANTH KRISHNA PORANDLA</h1> {/* Correct class name */}
          <p className="description">Software Developer</p> {/* Correct class name */}
          <p className="location">from India, currently based in Buffalo</p> {/* Correct class name */}
          
          <p className="contact-text">If you have interesting projects to work on, get in touch at</p> {/* Correct class name */}
          
          <div className="contact-info"> {/* Correct class name */}
            <p>yashwanth753@gmail.com</p>
          </div>
          
          <div className="social-media">
          <a href="https://www.linkedin.com/in/Yashwanth404" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>LINKEDIN</a>
          <a href="https://www.instagram.com/yashwanth__404" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactMe;

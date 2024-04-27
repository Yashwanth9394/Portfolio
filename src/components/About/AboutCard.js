import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="about-para">
      <Card.Body>
        
      <p style={{ textAlign: "justify" }}>
  I'm Yashwanth Krishna, a computer science graduate from the University at Buffalo with a focus on full stack development and related technologies.I'm passionate about software engineering and using technology to solve complex problems.
  <p style={{ textAlign: "justify" }}></p> I enjoy working on projects that blend technical strategy with precise execution, aiming to become a domain expert in full stack development, managing everything from initial concept to final deployment. My interests also include data science, cloud computing, and web application development.
</p>
<p style={{ textAlign: "justify" }}>
  I'm seeking opportunities in tech companies, focusing on full stack development, while also exploring roles that involve cloud computing and data-driven solutions. My experience includes internships and projects where I've developed my skills in these areas. You can view my resume/CV here.
</p>
<p style={{ textAlign: "justify" }}>
  I was born and raised in Warangal, a lively city in India. In my free time, I enjoy cooking, working out, reading books, and spending time with friends and family.
</p>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import algoviz from "../../Assets/Projects/algoviz.png";
import shl from "../../Assets/Projects/shl.png";
import suicide from "../../Assets/Projects/suicide.png";
import insync from "../../Assets/Projects/insync.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shl}
              isBlog={false}
              title="SHL Product Recommendation System"
              description="LLM-powered recommendation engine that reads natural language job descriptions and suggests suitable SHL assessments, built with FastAPI and Streamlit, using web scraping, OpenAI embeddings and semantic searching; deployed on Azure and Streamlit Cloud."
              ghLink="https://github.com/parakhc4/shL_Product_Recommendation_System/"
              demoLink="https://shlxparakh.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insync}
              isBlog={false}
              title="InSync.AI"
              description="Full-stack family household manager built with React and Node.js, enabling parents, cooks, and drivers to coordinate weekly meals, child activities, and logistics. Includes: LLM-powered planning and vision-based nutrition scanning, real time notifications, user friendly Android App."
              ghLink="https://github.com/parakhc4/InSync.AI"
              demoLink="https://parakhc4.github.io/insync.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoviz}
              isBlog={false}
              title="AlgoViz"
              description="An interactive visualization tool for data structures and algorithms, built with React and TypeScript to help students intuitively understand DSA concepts through real-time animations and step-by-step logic breakdowns."
              ghLink="https://github.com/parakhc4/algoviz"
              demoLink="https://parakhc4.github.io/algoviz/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

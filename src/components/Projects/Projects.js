import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import algoviz from "../../Assets/Projects/algoviz.png";
import shl from "../../Assets/Projects/shl.png";
import insync from "../../Assets/Projects/insync.png";
import anilam from "../../Assets/Projects/anilam.png";
import vincent from "../../Assets/Projects/vincent.png";

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

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vincent}
              isBlog={false}
              title="Freelance - Vincent Inn 3D Tour"
              description="Developed a Virtual 3D Tour for the Vincent Inn Hotel situated in Bhopal. Interactive Virtual Tour consists of functionalities such as sidebar, toggle night / day modes, etc. Deployed on Hotel's official website."
              ghLink="https://github.com/parakhc4/Vincent_inn_3D_Tour/"
              demoLink="https://thevincentinn.com/virtualtour/"              
            />
          </Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anilam}
              isBlog={false}
              title="Freelance - Villa Anilam 3D Tour"
              description="Developed a Virtual 3D Tour for Villa Anilam situated in Jaipur. Interactive Virtual Tour consists of functionalities such as sidebar, toggle night / day modes, etc. Deployed on Villa's official website. "
              ghLink="https://github.com/parakhc4/villa_anilam_tour"
              demoLink="https://peacehouses.com/villaanilam/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;

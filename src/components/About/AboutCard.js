import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, My name is <b className="purple">Parakh Chaudhary.</b>
            <br/>
            I'm an M.Tech Post Graduate from NIT Bhopal, specializing in Advanced Computing and Deep Learning.
            <br/>
            <br/>
            I am currently seeking opportunities in software engineering or full-stack development roles. I bring hands-on experience in building full-stack applications leveraging AI/LLM-driven solutions.
            <br />
            <br/>
            Welcome to my Portfolio. 
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

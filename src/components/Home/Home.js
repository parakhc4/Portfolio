import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import myImg from "../../Assets/avatar.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Parakh Chaudhary</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 40 }}>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ width: '65%' }}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

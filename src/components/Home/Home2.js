import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I thrive on solving challenges in infrastructure and deployment,
             and I enjoy automating all the things. ⚙️
              <br />
              <br />I’ve gained foundational knowledge of tools like
              <i>
                <b className="purple"> Docker, Kubernetes,</b>
              </i> and 
              <i>
                <b className="purple"> Terraform, </b>
              </i>
               and I enjoy exploring cloud platforms like 
              <i>
                <b className="purple"> AWS and Azure.</b>
              </i>
              <br />
              <br />
              My field of interest lies in creating 
              <b className="purple"> Scalable Infrastructure, Streamlining CI/CD pipelines, </b> 
              and exploring 
              <b className="purple"> Cloud-Native Technologies.</b> 
              <br />
              <br />
              In my spare time, I love experimenting with new 
              <b className="purple"> DevOps practices </b>
               and working on personal projects to sharpen my skills. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
              href="mailto:syedazherali01@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
              >
              <FaEnvelope />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://github.com/SyedAzherAli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syed-azher-ali-654680295/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SyedAzherAli404"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

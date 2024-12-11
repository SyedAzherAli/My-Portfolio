import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaDocker,
  FaAws,
  FaJenkins,
} from "react-icons/fa";
import {
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiKubernetes,
  SiTerraform,
  SiGnubash,
  SiAnsible,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiArgo,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArgo />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;

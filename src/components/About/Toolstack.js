import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoTerminal } from "react-icons/io5";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoTerminal />
      </Col>
    </Row>
  );
}

export default Toolstack;

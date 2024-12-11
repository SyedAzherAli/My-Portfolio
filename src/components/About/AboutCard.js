import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Syed Azher Ali </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I graduated with a B.Sc. in Computer Science and have developed a strong foundation in DevOps principles and cloud technologies. 
            <br />
            My passion lies in automating workflows, ensuring smooth CI/CD pipelines, and building scalable infrastructure that enhances application reliability and performance.
            <br />
            Currently, I am focused on mastering tools like Kubernetes, Docker, Terraform, Jenkins, and monitoring platforms like Prometheus and Grafana. 
            <br />
            I’m particularly interested in exploring advanced cloud services provided by AWS, Azure, and GCP to create efficient and cost-effective solutions.
            <br />
            <br />
            Apart from coding and automation, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Syed Azher Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

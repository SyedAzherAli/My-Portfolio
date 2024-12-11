import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cicdbash from "../../Assets/Projects/cicdbash.png";
import tfbackend from "../../Assets/Projects/tfbackend.png";
import cicdecr from "../../Assets/Projects/cicdecr.png";
import djangoops from "../../Assets/Projects/djangoops.png";

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoops}
              isBlog={false}
              title="DjangoOps"
              description="Establish a CI/CD pipeline using Jenkins to automate the deployment of a Django application. The pipeline will integrate the application with a Git repository, implement AWS services for enhanced functionality, and ensure seamless deployment to AWS infrastructure. Additionally, AWS resources will be provisioned using Terraform to enable consistent and automated infrastructure management. The objectives include:"
              ghLink="https://github.com/SyedAzherAli/django-app.git"
              demoLink="https://projects-devops.hashnode.dev/djangoops#heading-part-13-its-time-for-a-tea-manual"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tfbackend}
              isBlog={false}
              title="Terraform Shared State file"
              description="This project sets up Terraform state management using Amazon S3 and DynamoDB to enable team collaboration on infrastructure as code. By leveraging S3 as a remote backend for storing the Terraform state file and DynamoDB for state locking, the setup ensures consistency, security, and prevents conflicts when multiple team members work on the same project."
              ghLink="https://github.com/SyedAzherAli/terraform_learnings/tree/main/shared-tfstate"
              demoLink="https://projects-devops.hashnode.dev/terraform-shared-state-file"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cicdecr}
              isBlog={false}
              title="CICD using docker private repo"
              description="This project demonstrates a CI/CD pipeline using Jenkins to automate the build and deployment process for containerized applications. The pipeline integrates with a private Docker registry to securely store container images and deploys the application to an Amazon EKS (Elastic Kubernetes Service) cluster."
              ghLink="https://github.com/SyedAzherAli/ecr-cicd.git"
              demoLink="https://projects-devops.hashnode.dev/cicd-using-docker-private-repo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cicdbash}
              isBlog={false}
              title="CI/CD usign Bash Script for Static Website Hosting"
              description="This project automates the CI/CD workflow for deploying a static website using a single Bash script. The script pulls the latest changes from your GitHub repository and updates the hosted site on your server, ensuring efficient deployment with minimal downtime and manual effort."
              ghLink="https://github.com/SyedAzherAli/CICDBASH.git"
              demoLink="https://projects-devops.hashnode.dev/cicd-using-bash-script"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

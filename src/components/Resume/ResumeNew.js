import React from 'react';
import resume from '../../Assets/../Assets/Syed Azher Ali - AWS Devops Engineer.pdf'; // Import the PDF file

const Portfolio = () => {
  return (
    <div>
      <h1> </h1> 
    
      <p> </p> 
      {/* Embed PDF directly on the webpage */}
      <embed
        src={resume}
        type="application/pdf"
        width="100%"
        height="700px"
        title="My Resume"
      />

      {/* Or using an iframe */}
      {/* 
      <iframe 
        src={resume}
        width="100%"
        height="600px"
        title="My Resume"
      ></iframe>
      */}
      
      {/* Alternatively, you can have a download link as well */}
      {/* <a href={resume} target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a> */}
    </div>
  );
};

export default Portfolio;

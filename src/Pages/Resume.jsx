import React from "react";

const Work_Experience = () => {
  return (
    <div className="resume-page">
      <div className="resume-title">
        <h1>Resume</h1>
      </div>
      <div className="resume-info">
        <div className="resume-left">
          <h2>Work Experience</h2>
        </div>
        <div className="resume-right">
          <div className="resume-time">
            <h3>2024 - Present</h3>
          </div>
          <div className="resume-job">
            <h3>Software Developer</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div>
      <Work_Experience />
    </div>
  );
};

export default Resume;

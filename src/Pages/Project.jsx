import React from "react";
const Work_Experience = () => {
  return (
    <div className="page">
      <div className="title">
        <h1>Project</h1>
      </div>
      {/* 用比較笨的方法加，思考應該可以用 Components 的方式用 */}
      <div className="project-info">
        <div className="project-left">
          <h2>Project Name 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            beatae non dolorum mollitia quaerat maiores harum impedit itaque
            architecto hic quia earum quae porro amet, ab adipisci minus ut.
            Ratione!
          </p>
        </div>
        <div className="project-right">
          <img src="/Picture/Project-1.png" alt="Project-1-Picture" />
        </div>
      </div>
      <div className="project-info">
        <div className="project-left">
          <h2>Project Name 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            beatae non dolorum mollitia quaerat maiores harum impedit itaque
            architecto hic quia earum quae porro amet, ab adipisci minus ut.
            Ratione!
          </p>
        </div>
        <div className="project-right">
          <img src="/Picture/Project-2.png" alt="Project-1-Picture" />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return <Work_Experience />;
};

export default Project;

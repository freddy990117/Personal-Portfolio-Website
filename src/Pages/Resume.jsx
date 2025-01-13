import React from "react";
import { useOutletContext } from "react-router-dom";

const Work_Experience = () => {
  return (
    <div className="page">
      <div className="title">
        <h1>Resume</h1>
      </div>
      {/* 用比較笨的方法加，思考應該可以用 Components 的方式用 */}
      <div className="info">
        <div className="left">
          <h2>Work Experience</h2>
        </div>
        <div className="right">
          <div className="time">
            <h3>2022 - Present</h3>
          </div>
          <div className="job">
            <h3>電腦維修工程師</h3>
            <p>
              我是一名任職於工研院的電腦維修工程師，協助公司同仁解決電腦軟、硬體問題，曾負責教導新人，並制定
              SOP 流程，提升工作效率。
            </p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="left"></div>
        <div className="right">
          <div className="time">
            <h3>2018 - 2022</h3>
          </div>
          <div className="job">
            <h3>麥當勞 - 咖啡訓練師 </h3>
            <p>
              曾於 2018 年至 2022
              年在麥當勞擔任咖啡訓練師，負責教導新進員工如何製作咖啡，並且協助店內的咖啡製作流程。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="page">
      <div className="title"></div>
      {/* 用比較笨的方法加，思考應該可以用 Components 的方式用 */}
      <div className="info">
        <div className="left">
          <h2>Education</h2>
        </div>
        <div className="right">
          <div className="time">
            <h3>2017 - 2021</h3>
          </div>
          <div className="job">
            <h3>中華科技大學 - 航空電子系</h3>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="left"></div>
        <div className="right">
          <div className="time">
            <h3>2013 - 2017 </h3>
          </div>
          <div className="job">
            <h3>嘉陽高中 - 航空電子系 </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="page">
      <div className="title"></div>
      {/* 用比較笨的方法加，思考應該可以用 Components 的方式用 */}
      <div className="info">
        <div className="left">
          <h2>Skills & Expertise</h2>
        </div>
        <div className="right">
          <div className="time">
            <h3>Programming</h3>
          </div>
          <div className="job">
            <ul>
              <li>
                <h3>React</h3>
                <h3>HTML</h3>
                <h3>CSS、SCSS</h3>
                <h3>JavaScript</h3>
                <h3>Git</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="left"></div>
        <div className="right">
          <div className="time">
            <h3>Language</h3>
          </div>
          <div className="job">
            <h3>中文</h3>
            <h3>英文</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  const { Line } = useOutletContext(); // 從 context 中取得 Line

  return (
    <div>
      <Work_Experience />
      <Line />
      <Skills />
      <Line />
      <Education />
    </div>
  );
};

export default Resume;

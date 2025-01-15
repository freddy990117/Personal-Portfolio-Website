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
          <a href="https://github.com/freddy990117/Pexel-Picture-Project">
            <h2>Project 1 - Pexel Picture Search</h2>
          </a>
          <br />
          <h3>
            這個專案使用 React 撰寫，並使用 Axios 訪問 Pexel
            API來搜尋和顯示圖片。
          </h3>
          <p>
            1.使用 BrowserRouter 來管理各個路由，讓用戶可以在不同頁面之間導航。
            <br />
            2.使用 map 方法與 transition 來顯示圖片，並且每張圖片可以點擊下載。
            <br />
            3.使用 async / await 處理異步的 API
            的請求，並在載入網頁時能馬上看到圖片
            <br />
            4.使用 React Hook 處理搜尋圖片的功能
            <br />
            5.這個專案展示了如何整合第三方 API 並在
            React應用中使用路由和狀態管理。
          </p>
        </div>
        <div className="project-right">
          <video src="Video/Pexel-Project.mp4"></video>
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

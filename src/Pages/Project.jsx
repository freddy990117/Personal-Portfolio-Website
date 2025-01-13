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
          <h2>Project 1 - Pexel Picture Search</h2>
          <br />
          <h3>
            這個專案使用 React 撰寫，並使用 Axios 串接 Pexel API
            來搜尋和顯示圖片。
          </h3>
          <p>
            1.使用 BrowserRouter 來管理各個路由，讓用戶可以在不同頁面之間導航。
            <br />
            2.使用 map
            方法來顯示圖片列表，並且每張圖片都可以點擊進入該圖片的詳細頁面。
            <br />
            3.這個專案展示了如何整合第三方 API 並在 React
            應用中使用路由和狀態管理。
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

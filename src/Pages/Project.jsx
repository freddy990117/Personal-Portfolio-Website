import React from "react";
const My_Project = () => {
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
          <h3>
            這個專案使用 React 撰寫，並使用 Axios 訪問 Pexel
            API來搜尋和顯示圖片。
          </h3>
          <p>
            asdasd 1.使用 BrowserRouter
            來管理各個路由，讓用戶可以在不同頁面之間導航。
            <br />
            2.使用 map 方法與 transition 來顯示圖片，並且每張圖片可以點擊下載。
            <br />
            3.使用 async / await 處理異步的 API
            的請求，並在載入網頁時能馬上看到圖片。
            <br />
            4.使用 React Hook 處理搜尋圖片的功能。
            <br />
            5.這個專案展示了如何整合第三方 API 並在
            React應用中使用路由和狀態管理。
          </p>
        </div>
        <div className="project-right">
          <video src="./Video/Pexel-Project.mp4" controls></video>
        </div>
      </div>
      <div className="project-info">
        <div className="project-left">
          <a href="https://github.com/freddy990117/All-Project/tree/main/Project_14%20Animated%20Navigation">
            <h2>Project 2 - Login Page</h2>
          </a>
          <h3>
            這個專案使用 SCSS 撰寫，並應用了 SCSS
            的變數、巢狀結構等功能來簡化樣式管理。
          </h3>
          <p>
            1.
            使用百分比來控制排版，實現響應式設計效果，使介面可以適應不同大小的螢幕。
            <br />
            2. 利用 Flexbox
            排版來實現元素的靈活對齊和排列，提升了介面結構的可讀性。
            <br />
            3.使用 :focus、:vaild 偽類來處理表單元素的焦點狀態。
            <br />
            4.使用 transition、transfrom 處理表單的動畫‧
            <br />
            5.此專案展示了如何運用 SCSS 和現代 CSS 技術（如
            Flexbox、:focus、偽類等）來優化網頁設計，並提升開發效率﹑增強用戶體驗。
          </p>
        </div>
        <div className="project-right">
          <video src="./Video/Login_Page.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return <My_Project />;
};

export default Project;

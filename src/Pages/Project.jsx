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
            1.使用 BrowserRouter 來管理各個路由，讓用戶可以在不同頁面之間導航。
            <br />
            2.使用 map 方法與 transition 來顯示圖片，並且每張圖片可以點擊下載。
            <br />
            3.使用 async / await 處理異步的 API
            的請求，並在載入網頁時能馬上看到圖片。
            <br />
            4.使用 React Hook (useState,useEffect,useMemo)處理搜尋圖片的功能。
            <br />
            5.這個專案展示了如何整合第三方 API 並在
            React應用中使用路由和狀態管理。
          </p>
        </div>
        <div className="project-right">
          <video src="./Video/Pexel-Project.mov" controls></video>
        </div>
      </div>
      <div className="project-info">
        <div className="project-left" style={{ textAlign: "start",gap:"10px" }}>
          <a href="https://github.com/freddy990117/All-Project/tree/main/Project_14%20Animated%20Navigation">
            <h2>Project 2 - Weather App</h2>
          </a>
          <h3>
            這個專案使用了 HTML、SCSS、JavaScript 撰寫 ，並使用 OpenWeather API
            獲取天氣資訊，實現即時更新 UI。
          </h3>
          <p>
            1.使用 fetch 向 OpenWeather API 請求天氣數據，並用 .then(...) 解析
            JSON 資料。
            <br />
            2.根據回傳的狀態碼判斷請求是否成功，若為 "404"
            則顯示「找不到城市」錯誤畫面。
            <br />
            3.使用 Switch-Case 判斷天氣狀況並更換對應的天氣圖片。
            <br />
            4.使用 e.preventDefault() 來防止 Enter
            觸發表單的行為，確保可以正確被查詢。
            <br />
            5.當天氣更新前，加入 Animation
            動畫，當新數據載入後再放大顯示，確保畫面平順切換。
          </p>
        </div>
        <div className="project-right">
          <video src="./Video/Weather_App.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return <My_Project />;
};

export default Project;

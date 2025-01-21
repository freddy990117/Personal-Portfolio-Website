import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navs = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "Resume" },
  { name: "Project", path: "Project" },
];

const Main = () => {
  const navigate = useNavigate();
  // background Setup
  useEffect(() => {
    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Freddy", queryID: 7 }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="l-main">
      <div className="main-info">
        <div className="main-picture">
          <img src="./Picture/Picture.png" />
        </div>
        <div className="main-aboutme">
          <div className="info">
            <h1>Hello</h1>
            <h3>Nice to meet you</h3>
            <p>
              Hi, I'm Freddy, a front-end developer. I'm passionate about
              developing web applications and always eager to learn new
              technologies. I'm always looking for new challenges and
              opportunities to grow.
            </p>
          </div>

          <div className="navBar-main">
            {navs.map((nav, index) => (
              <div
                key={index}
                className="nav-main"
                // 因為key 的 index 是專門用於識別列表中的每個子項，以優化 React 的渲染性能，但它不會自動轉換為 DOM 的屬性，
                // 這就是為什麼無法直接用 key 的值來控制樣式。
                data-index={index}
                onClick={() => navigate(nav.path)}
                // 配合 useNagative 跳轉到不同畫面
                style={{ cursor: "pointer" }}
              >
                {nav.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default Homepage;

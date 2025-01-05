import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import "./Layout.css";
const navs = [
  { name: "Resume", path: "/Resume" },
  { name: "Project", path: "/Project" },
  { name: "Skill", path: "/Skill" },
  { name: "Contact", path: "/Contact" },
];

const navFooter = [
  { type: "contact", name: "Phone :", data: "0988-XXX-XXX" },
  { type: "contact", name: "Email :", data: "freddy990117@gmail.com" },
  {
    type: "social",
    name: "Social Media :",
    icons: [
      {
        class: "fa-brands fa-github fa-2x",
        url: "https://github.com/freddy990117",
      },
      {
        class: "fa-brands fa-instagram fa-2x",
        url: "https://www.instagram.com",
      },
    ],
  },
  { type: "CopyRight", name: "© 2025 Powered by Freddy" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="l-header">
      <div className="title">
        <h2>Freddy</h2>
        <p>Edit</p>
      </div>
      <div className="navBar-header">
        {navs.map((nav, index) => (
          <div
            key={index}
            className="nav-header"
            onClick={() => navigate(nav.path)}
            style={{ cursor: "pointer" }}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="l-footer">
      <div className="navBar-footer">
        {/* 透過 map 顯示出表單的內容 */}
        {navFooter.map((nav, index) => (
          <div key={index} className="nav-footer">
            <h4>{nav.name}</h4>
            {/* 如果有 data，直接顯示 */}
            {nav.data && <span>{nav.data}</span>}

            {/* 如果是社交媒體類型，渲染圖標 */}
            {nav.type === "social" && (
              <div className="social-icons">
                {nav.icons.map((icon, idx) => (
                  <i
                    key={idx}
                    className={icon.class}
                    onClick={() => {
                      window.open(icon.url, "_blank");
                    }}
                  ></i>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="l-main">
      <h2>JAJA</h2>
      <h2>JAJA</h2>
      <h2>JAJA</h2>
      <Outlet />
    </div>
  );
};
const Layout = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;

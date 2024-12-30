import React from "react";
import "./Layout.css";
const navs = [
  { name: "Resume" },
  { name: "Project" },
  { name: "Skill" },
  { name: "Contact" },
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
  { type: "CopyRight", name: "© 2025 by Freddy" },
];

const Header = () => {
  return (
    <div className="l-header">
      <div className="title">
        <h2>Freddy</h2>
        <p>Edit</p>
      </div>
      <div className="navBar-header">
        {navs.map((nav, index) => (
          <div key={index} className="nav-header">
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
        {navFooter.map((nav, index) => (
          <div key={index} className="nav-footer">
            <h3>{nav.name}</h3>
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

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="l-main" style={{ height: "50vh" }}></div>
      <Footer />
    </div>
  );
};

export default Layout;

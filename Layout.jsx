import React from "react";
import "./Layout.css";
const navs = [
  { name: "Resume" },
  { name: "Project" },
  { name: "Skill" },
  { name: "Contact" },
];

const navFooter = [
  { name: "Phone :", data: "0988-XXX-XXX" },
  { name: "Email :", data: "freddy990117@gmail.com" },
  { name: "Social Media :", data: "" },
  { name: "© 2025 By Freddy" },
];

const Header = () => {
  return (
    <div className="l-header">
      <div className="title">
        <h2>Freddy</h2>
        <p>Edit</p>
      </div>
      <div className="navBar-header">
        {navs.map((nav) => (
          <div className="nav-header">{nav.name}</div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="l-footer">
      <div className="navBar-footer">
        {navFooter.map((nav) => (
          <div className="nav-footer">
            <h3>{nav.name}</h3>
            <span>{nav.data}</span>
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

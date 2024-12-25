import React from "react";
import "./Layout.css";
const navs = [
  { name: "Home" },
  { name: "About" },
  { name: "Skill" },
  { name: "Project" },
  { name: "Contact" },
];

const Header = () => {
  return (
    <div className="l-header">
      <div className="title">
        <h2>Freddy</h2>
      </div>
      <div className="navBar">
        {navs.map((nav) => (
          <div className="nav">{nav.name}</div>
        ))}
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="l-main"></div>
      <div className="l-footer"></div>
    </div>
  );
};

export default Layout;

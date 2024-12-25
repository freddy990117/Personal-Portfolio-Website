import React from "react";
const Header = () => {
  return (
    <div className="l-header">
      <h2>Freddy</h2>
      <div className="navBar">
        {navs.map((nav) => (
          <div className="nav">{nav.name}</div>
        ))}
      </div>
    </div>
  );
};
const navs = [
  { name: "Home" },
  { name: "About" },
  { name: "Skill" },
  { name: "Project" },
  { name: "Contact" },
];
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

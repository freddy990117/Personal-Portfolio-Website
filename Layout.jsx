import React from "react";

const Layout = ({ Component }) => {
  return (
    <div>
      <h2>I am in Layout</h2>

      <div className="l-header"></div>
      <div className="l-main"></div>
      <div className="l-footer"></div>
    </div>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar";

function Layout({ children }): JSX.Element {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;

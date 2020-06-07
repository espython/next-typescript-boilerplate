import React from "react";

function Layout({ children }) {
  return (
    <div>
      <h2>hello from layout</h2>
      {children}
    </div>
  );
}

export default Layout;

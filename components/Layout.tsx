import React from "react";

function Layout({ children }): JSX.Element {
  return (
    <div>
      <h2>hello from layout</h2>
      {children}
    </div>
  );
}

export default Layout;

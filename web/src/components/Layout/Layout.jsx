import React from "react";
import "./Layout.scss";
import "@fontsource/parisienne";
import "@fontsource/roboto";

const Layout = ({ children }) => {
  return <main className="main">
  {children}</main>;
};

export default Layout;

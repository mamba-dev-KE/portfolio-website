import React from "react";
import "./Layout.scss";
import "@fontsource/parisienne";
import "@fontsource/roboto";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/700.css";

const Layout = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Layout;

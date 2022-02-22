import React from "react";
import { graphql } from "gatsby";
import "normalize.css";
import NavBar from "../components/NavBar/NavBar";
import Layout from "../components/Layout/Layout";

export default function Home({ data }) {
  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Layout></Layout>
      </React.StrictMode>
    </>
  );
}

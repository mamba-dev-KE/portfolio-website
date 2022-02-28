import React from "react";
import "normalize.css";
import NavBar from "../components/NavBar/NavBar";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home({ data }) {
  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Layout>
          <Hero />
          <About />
        </Layout>
        <Footer />
      </React.StrictMode>
    </>
  );
}

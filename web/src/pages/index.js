import React from "react";
import "normalize.css";
import {
  NavBar,
  Layout,
  Hero,
  About,
  Footer,
  Projects,
  Skills,
  Contact,
} from "../components";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Layout>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Layout>
        {/* <Footer /> */}
      </React.StrictMode>
    </>
  );
}

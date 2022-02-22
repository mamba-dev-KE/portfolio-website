import React from "react";
import { graphql } from "gatsby";
import "normalize.css";
import NavBar from "../components/NavBar/NavBar";
import Layout from "../components/Layout/Layout";


export default function Home({ data }) {
  const { edges } = data?.allSanityBlogPost;

  return (
    <>
      <React.StrictMode>
        <NavBar />
        <Layout></Layout>
      </React.StrictMode>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allSanityBlogPost {
      totalCount
      edges {
        node {
          _id
          name
          sponsor {
            name
            url
          }
        }
      }
    }
  }
`;

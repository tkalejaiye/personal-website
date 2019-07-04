import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/profile.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.container}>
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="profile photo"
          className={indexStyles.profile}
        />

        <div>
          <h1>Hi, I'm Tolu!</h1>
          <h2>I'm a software developer based in Lagos, Nigeria</h2>
          <p>
            I'm passionate about using technology as a tool to foster
            innovation, spread knowledge, and create opportunities
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

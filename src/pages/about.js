import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        I'm a software developer living in Lagos, Nigeria. I work primarily with
        React and React Native to build apps for the web and mobile. I currenty
        working as a Technical Product Specialist at{" "}
        <a href="https://paystack.com/" target="blank">
          Paystack
        </a>
        .
      </p>
      <p>
        I'm an avid learner and I try to be as much of a polymath as
        possible(diversifying my knowledge and that). As such, I spend a lot of
        my spare time trying to learn new frameworks/technologies, reading, and
        all around developing myself personally.
      </p>

      <p>
        I'm an Arsenal fan(please keep your jokes and condescension to
        yourself), I enjoy playing football, and I love listening to music. I
        actually think I have a great taste in music, so check out my{" "}
        <a href="https://soundcloud.com/tolluminati/">Soundcloud</a>
      </p>
    </Layout>
  )
}

export default AboutPage

import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Looking for a freelancer to help you build your next e-commerce site or
        mobile app? Get in touch and let's talk!
      </p>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="">Subject</label>
          <input type="text" name="subject" id="email" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
      </form>
    </Layout>
  )
}

export default ContactPage

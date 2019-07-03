import React from "react"

import Layout from "../components/layout"

import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Looking for a freelancer to help you build your next e-commerce site or
        mobile app? Get in touch and let's talk!
      </p>
      <div className={contactStyles.formContainer}>
        <form action="" className={contactStyles.formGrid}>
          <div className={contactStyles.formName}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={contactStyles.formEmail}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={contactStyles.formMessage}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="75"
              rows="10"
            ></textarea>
          </div>
        </form>
        <button>Send</button>
      </div>
    </Layout>
  )
}

export default ContactPage

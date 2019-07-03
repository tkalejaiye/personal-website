import React from "react"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.socialList}>
        <li>
          <a
            className={footerStyles.socialListItem}
            href="https://github.com/tkalejaiye"
            target="blank"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className={footerStyles.socialListItem}
            href="https://www.linkedin.com/in/tolukalejaiye/"
            target="blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            className={footerStyles.socialListItem}
            href="https://twitter.com/tolluminati"
            target="blank"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className={footerStyles.socialListItem}
            href="https://www.instagram.com/tolluminati/"
            target="blank"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>

      <p>Created by Tolu Kalejaiye © 2019 </p>
    </footer>
  )
}

export default Footer

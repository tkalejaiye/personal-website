import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
    <Link className={headerStyles.nameLink} to="/">
      Tolu Kalejaiye
    </Link>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header

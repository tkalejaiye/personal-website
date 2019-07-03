import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <h1>Tolu's Website</h1>
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

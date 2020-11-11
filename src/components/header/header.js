import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav
        className="uk-navbar-container uk-background-primary uk-padding-top"
        style={{ backgroundColor: "white" }}
        data-uk-navbar
      >
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link className="uk-navbar-item uk-logo" to="/">
            <h1
              className="uk-h2 uk-margin-remove uk-text-primary"
              style={{ fontWeight: "bold" }}
            >
              Islander Joy
            </h1>
          </Link>
          <div className="uk-navbar-center-right">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="uk-icon uk-navbar-item uk-text-primary"
                    data-uk-icon="cart"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="uk-navbar-right">
        <Link
          to="/cart"
          className="uk-icon uk-navbar-item uk-text-primary"
          data-uk-icon="cart"
        ></Link>
      </div> */}
      </nav>
    </div>
  )
}

export default Header

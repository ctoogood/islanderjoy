import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav
        className="uk-navbar-container uk-background-primary uk-padding-top uk-hidden@m"
        style={{ backgroundColor: "white" }}
        data-uk-navbar
      >
        <div className="uk-navbar-left">
          <button
            className="uk-navbar-toggle uk-button"
            data-uk-navbar-toggle-icon
            data-uk-toggle="target: #mobile-menu"
          />
        </div>
        <div className="uk-navbar-center">
          <Link className="uk-navbar-item uk-logo" to="/">
            <h1
              className="uk-h2 uk-margin-remove uk-text-primary"
              style={{ fontWeight: "bold" }}
            >
              Islander Joy
            </h1>
          </Link>
        </div>
        <div className="uk-navbar-right">
          <Link
            to="/cart"
            className="uk-icon uk-navbar-item"
            data-uk-icon="cart"
          ></Link>
        </div>
      </nav>
      <nav
        className="uk-navbar-container uk-background-primary uk-padding-top uk-visible@m"
        style={{ backgroundColor: "white" }}
        data-uk-navbar
      >
        <div className="uk-navbar-center">
          <div className="uk-navbar-center-left">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <Link style={{ fontWeight: "normal" }} to="/about">
                    About
                  </Link>
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
                  <Link style={{ fontWeight: "normal" }} to="/shop">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uk-navbar-right">
          <div>
            <ul className="uk-navbar-nav">
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
      </nav>
      <div id="mobile-menu" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar" style={{ backgroundColor: "white" }}>
          <button
            className="uk-offcanvas-close"
            type="button"
            aria-label="Close"
            data-uk-close
            style={{ color: "black" }}
          />

          <ul className="uk-nav uk-offcanvas-nav ">
            <li>
              <Link to="/" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "black" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" style={{ color: "black" }}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

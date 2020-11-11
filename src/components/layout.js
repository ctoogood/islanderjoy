/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <main
      className="uk-width-1-1"
      style={{ maxWidth: "1400px", margin: "auto" }}
    >
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

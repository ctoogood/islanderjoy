/* eslint-disable jsx-a11y/control-has-associated-label */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "Web (12)" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light">
      <div className="uk-position-absolute uk-position-z-index uk-position-center uk-padding-small">
        <h2
          className="uk-margin-remove uk-h1 uk-text-bold uk-text-center"
          style={{ fontSize: "5rem" }}
        >
          About
        </h2>
      </div>
      {/* <ul class="uk-slider-items uk-child-width-1-1">
        {data.allFile.edges.map(image => (
          <li> */}
      <Img
        className="uk-width-1-1"
        style={{ height: "70vh" }}
        objectPosition="bottom"
        fluid={data.file.childImageSharp.fluid}
      />
      {/* </li>
        ))}
      </ul>
      <button
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        data-uk-slidenav-previous
        uk-slider-item="previous"
      ></button>
      <button
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        data-uk-slidenav-next
        uk-slider-item="next"
      ></button> */}
    </div>
  )
}

export default Hero

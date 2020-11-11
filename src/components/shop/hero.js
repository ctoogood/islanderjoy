/* eslint-disable jsx-a11y/control-has-associated-label */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "interior" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      data-uk-slider
    >
      <div className="uk-position-absolute uk-position-z-index uk-position-center uk-padding-small">
        <h2
          className="uk-margin-remove uk-h1 uk-text-bold uk-text-center"
          style={{ fontSize: "5rem" }}
        >
          Shop
        </h2>
      </div>
      <ul class="uk-slider-items uk-child-width-1-1">
        {data.allFile.edges.map(image => (
          <li>
            <Img
              className="uk-width-1-1"
              style={{ height: "80vh" }}
              objectPosition="bottom"
              fluid={image.node.childImageSharp.fluid}
            />
          </li>
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
      ></button>
    </div>
  )
}

export default Hero

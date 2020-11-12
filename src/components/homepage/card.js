/* eslint-disable jsx-a11y/control-has-associated-label */

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativeDirectory: { eq: "interior" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "6rem",
          marginBottom: "6rem",
        }}
        data-uk-grid
      >
        {/* <div
          class="uk-flex-last@s uk-card-media-right uk-cover-container uk-visible-toggle uk-light"
          data-uk-slider="autoplay: true"
        >
          <ul class="uk-slider-items uk-child-width-1-1 uk-child-height-1-1">
            {data.allFile.edges.map(image => (
              <li> */}
        <Img
          className="uk-flex-last@s"
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
          ></button>
        </div> */}
        <div>
          <div class="uk-card-body uk-text-center uk-text-left@s">
            <h2 class="uk-card-title uk-text-lead">
              Photographic prints of the Shetland Islands
            </h2>
            <p>
              8-bit franzen keffiyeh trust fund readymade tousled. Vice blog air
              plant wolf hexagon. Farm-to-table flexitarian hashtag affogato,
              next level single-origin coffee pop-up kickstarter cloud bread.
              Four loko forage YOLO, bespoke selvage venmo direct trade irony
              umami woke.
            </p>
            <hr />
            <Link to="/shop">
              <button class="uk-button uk-button-secondary">
                View the Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

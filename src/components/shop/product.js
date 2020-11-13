import { Link } from "gatsby"
import React from "react"

const Product = ({ product }) => {
  const image = product.images[0].localFile.url
  return (
    <Link
      className="uk-card uk-card-default uk-card-body productList__hover uk-margin-remove"
      style={
        {
          // border: "0.5rem solid #383838",
          // boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
          // padding: "10%",
        }
      }
      to={`/shop/${product.handle}`}
    >
      <img
        src={image}
        style={{ objectFit: "cover", minHeight: "100%" }}
        alt={product.title}
      />
    </Link>
  )
}

export default Product

import React from "react"
import Product from "./product"

const ProductList = ({ products }) => {
  return (
    <section
      className="uk-margin-large-top"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
        overflow: "hidden",
      }}
    >
      <section
        className="productGrid"
        style={{ paddingBottom: "10rem" }}
        data-uk-grid="masonry: true"
      >
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </section>
    </section>
  )
}

export default ProductList

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Product from "./product"

const ProductListPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(
        filter: {
          images: {
            elemMatch: {
              localFile: {
                childImageSharp: { fluid: { aspectRatio: { lte: 1 } } }
              }
            }
          }
        }
        limit: 3
        sort: { fields: publishedAt, order: DESC }
      ) {
        edges {
          node {
            id
            handle
            images {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section
      className="uk-margin-large-top"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1 className="uk-text-center uk-h1 uk-margin-large uk-text-primary">
        Latest Products
      </h1>
      <section className="productGrid">
        {data.allShopifyProduct.edges.map(product => (
          <Product product={product.node} key={product.node.id} />
        ))}
      </section>
      <div className="uk-text-center uk-margin-large">
        <Link to="/shop">
          <button className="uk-button uk-button-secondary">View All</button>
        </Link>
      </div>
    </section>
  )
}

export default ProductListPreview

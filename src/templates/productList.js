import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/shop/product"
import Hero from "../components/shop/hero"

const ProductList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/shop/" : "/shop/" + (currentPage - 1).toString()
  const nextPage = "/shop/" + (currentPage + 1).toString()
  return (
    <Layout>
      <SEO
        title="Shop"
        description="Buy photographic prints from the Shetland Islands by Joy Allan"
      />
      <Hero />
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
          data-uk-grid="masonry: true"
          style={{
            marginBottom: "10rem",
          }}
        >
          {props.data.products.edges.map(product => (
            <Product product={product.node} key={product.node.shopifyId} />
          ))}
        </section>
        <ul className="uk-pagination uk-position-relative">
          {!isFirst && (
            <li className="uk-position-bottom-left">
              <Link className="blog__prev" to={prevPage} rel="prev">
                <span
                  className="uk-margin-small-right"
                  data-uk-pagination-previous
                ></span>
                <strong>Previous</strong>
              </Link>
            </li>
          )}
          {!isLast && (
            <li className="uk-position-bottom-right">
              <Link className="blog__next" to={nextPage} rel="next">
                <strong>Next</strong>
                <span
                  className="uk-margin-small-left"
                  data-uk-pagination-next
                ></span>
              </Link>
            </li>
          )}
        </ul>
      </section>
    </Layout>
  )
}

export default ProductList

export const query = graphql`
  query ProductQuery($limit: Int!, $skip: Int!) {
    products: allShopifyProduct(
      limit: $limit
      skip: $skip
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          shopifyId
          handle
          title
          images {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          handle
          shopifyId
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images {
            localFile {
              childImageSharp {
                original {
                  height
                  width
                  src
                }
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const defaultState = {
  products: [],
}

const ProductContext = React.createContext(defaultState)
export default ProductContext

export function ProductContextProvider({ children }) {
  const { allShopifyProduct } = useStaticQuery(query)
  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

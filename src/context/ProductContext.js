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

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { navigate } from "@reach/router"
// import Gallery from "react-photo-gallery"
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
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  // const photos = data.allShopifyProduct.edges.map(product => {
  //   const photo = {}
  //   photo.src = product.node.images[0].localFile.childImageSharp.original.src
  //   photo.width =
  //     product.node.images[0].localFile.childImageSharp.original.width
  //   photo.height =
  //     product.node.images[0].localFile.childImageSharp.original.height
  //   photo.link = `shop/${product.node.handle}`

  //   return photo
  // })

  // const linkTo = useCallback(async function (event, { photo, index }) {
  //   await navigate(photo.link)
  // }, [])

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
        {/* <Gallery
          photos={photos}
          direction={"column"}
          margin={5}
          onClick={linkTo}
        /> */}
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

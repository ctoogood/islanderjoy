import React from "react"
import Product from "./product"
// import { navigate } from "@reach/router"
// import Gallery from "react-photo-gallery"

const ProductList = ({ products }) => {
  // const photos = products.map(product => {
  //   const photo = {}
  //   photo.src = product.images[0].localFile.childImageSharp.original.src
  //   photo.width = product.images[0].localFile.childImageSharp.original.width
  //   photo.height = product.images[0].localFile.childImageSharp.original.height
  //   photo.link = `shop/${product.handle}`

  //   return photo
  // })

  // const linkTo = useCallback(async function (event, { photo, index }) {
  //   navigate(photo.link)
  // }, [])
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
        data-uk-grid="masonry: true"
        style={{ marginBottom: "10rem" }}
      >
        {/* <Gallery
          photos={photos}
          direction={"column"}
          margin={5}
          onClick={linkTo}
        /> */}
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </section>
    </section>
  )
}

export default ProductList

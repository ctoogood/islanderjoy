/* eslint-disable jsx-a11y/no-onchange */

import React, { useState, useEffect, useMemo } from "react"
// import queryString from "query-string"
import { graphql, Link } from "gatsby"
// import { navigate, useLocation } from "@reach/router"
import { prepareVariantsWithOptions } from "./util"
import BasicProductImageGallery from "../components/shop/imageGallery.js"
import ProductQuantity from "../components/shop/productQuantity"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OptionPicker from "../components/shop/optionPicker"

const ProductDetail = ({ data: { shopifyProduct: product } }) => {
  const sizes = product.options.find(
    option => option.name.toLowerCase() === "size"
  )

  const mounts = product.options.find(
    option => option.name.toLowerCase() === "mount"
  )

  const frames = product.options.find(
    option => option.name.toLowerCase() === "frame"
  )

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])

  const [variant, setVariant] = useState(variants[0])
  const [frame, setFrame] = useState(variant.frame)
  const [mount, setMount] = useState(variant.mount)
  const [size, setSize] = useState(variant.size)
  // const { search, origin, pathname } = useLocation()
  // const variantId = queryString.parse(search).variant

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return (
        variant.size === size &&
        variant.mount === mount &&
        variant.frame === frame
      )
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
      // navigate(
      //   `${origin}${pathname}?variant=${encodeURIComponent(variant.shopifyId)}`,
      //   {
      //     replace: true,
      //   }
      // )
    }
  }, [size, mount, frame, variants, variant.shopifyId])

  return (
    <Layout>
      <SEO title={product.title} />
      <section
        className="uk-padding"
        style={{ maxWidth: "1000px", margin: "auto" }}
      >
        <ul className="uk-breadcrumb" aria-label="breadcrumb">
          <li>
            <Link className="uk-text-primary" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <p className="uk-display-inline">{product.title}</p>
          </li>
        </ul>
        <div className="productDetail__grid">
          <div>
            <BasicProductImageGallery
              images={product.images}
              selectedVariantImageId={variant?.image.id}
            />
          </div>
          <div>
            <h1 className="uk-h1 uk-text-bold uk-text-primary uk-text-center uk-text-left@m">
              {product.title}
            </h1>
            {product?.availableForSale && !!variant && (
              <>
                {product.options[0] ? (
                  <OptionPicker
                    key="Size"
                    name="Size"
                    options={sizes.values}
                    selected={size}
                    onChange={event => setSize(event.target.value)}
                  />
                ) : null}
                {product.options[1] ? (
                  <OptionPicker
                    key="Mount"
                    name="Mount"
                    options={mounts.values}
                    selected={mount}
                    onChange={event => setMount(event.target.value)}
                  />
                ) : null}
                {product.options[2] ? (
                  <OptionPicker
                    key="Frame"
                    name="Frame"
                    options={frames.values}
                    selected={frame}
                    onChange={event => setFrame(event.target.value)}
                  />
                ) : null}
                {console.log(size, mount, frame)}
                {!!variant && (
                  <>
                    <h3 className="uk-h2 uk-text-bold uk-text-primary uk-margin-medium">
                      £{variant.price}
                    </h3>
                    <ProductQuantity
                      available={variant.availableForSale}
                      variantId={variant.shopifyId}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <h2 className="uk-h2">Product Description</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml,
          }}
        ></div>
      </section>
    </Layout>
  )
}

export default ProductDetail

export const ProductPageQuery = graphql`
  query ProductDetailQuery($productId: String) {
    shopifyProduct(shopifyId: { eq: $productId }) {
      title
      shopifyId
      description
      descriptionHtml
      availableForSale
      variants {
        shopifyId
        availableForSale
        selectedOptions {
          name
          value
        }
        price
        image {
          id
        }
      }
      options {
        name
        values
      }
      images {
        id
        localFile {
          url
          childImageSharp {
            fluid(maxWidth: 700) {
              src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

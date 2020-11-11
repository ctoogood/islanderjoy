import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductListPreview from "../components/shop/productListPreview"
import Slider from "../components/homepage/slider"
import Card from "../components/homepage/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Card />
    <ProductListPreview />
  </Layout>
)

export default IndexPage

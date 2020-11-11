//  Code to generate pages from posts fetched from Sanity
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Fetch the data
  const result = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  // Get all the posts in an array
  const products = result.data.allShopifyProduct.edges || []
  const productsPerPage = 9
  const numPages = Math.ceil(products.length / productsPerPage)

  products.forEach(({ node }) => {
    const path = `/shop/${node.handle}`
    createPage({
      path,
      component: require.resolve(`./src/templates/productDetail.js`),
      context: {
        productId: node.shopifyId,
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/shop` : `/shop/${i + 1}`,
      component: require.resolve("./src/templates/productList.js"),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

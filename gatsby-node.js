exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

{
  allContentfulAsset {
    nodes {
      contentful_id
      title
      description
    }
  }
}

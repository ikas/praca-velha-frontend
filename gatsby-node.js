const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Generate pages for each contentful construction
  const constructionTemplate = path.resolve(`./src/templates/construction-contentful.js`)
  const constructionResult = await graphql(`
    {
      allContentfulConstruction {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  if (constructionResult.errors) throw constructionResult.errors
  const constructions = constructionResult.data.allContentfulConstruction.edges
  constructions.forEach(construction => {
    createPage({
      path: construction.node.slug,
      component: constructionTemplate,
      context: { slug: construction.node.slug },
    })
  })
}

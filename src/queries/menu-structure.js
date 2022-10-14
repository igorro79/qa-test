import { graphql, useStaticQuery } from 'gatsby'

const useMenuStructure = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MenuStructureQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                description
                title
              }
            }
          }
        }
      }
    `
  )

  return allMarkdownRemark.edges
}

export default useMenuStructure

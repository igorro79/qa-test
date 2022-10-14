---
templateKey: blog-post
title: menu stucture
date: 2022-10-14T07:57:26.564Z
description: menu stucture decsription
featuredimage: right-01.png
---
n﻿ew body

```
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
```

next text 



![](soldier-60707_960_720-1-.jpg)
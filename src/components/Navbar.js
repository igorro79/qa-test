import React from 'react'
import { Link, graphql } from 'gatsby'

import useMenuStructure from '../queries/menu-structure'

export default function Navbar() {
  const menuItems = useMenuStructure()
  console.log(menuItems)
  return (
    <div className="font-bold w-60 bg-blue-200  py-2">
      <ul className="flex flex-col lg:inline-flex items-center">
        <li>
          <Link to={'/'} className=" px-2 lg:px-0">
            Специфікація до web ресурсу
          </Link>
        </li>
        <li>
          <div className="h-px w-full  bg-black"></div>
        </li>
        {Array.isArray(menuItems) &&
          menuItems.map(item => (
            <li key={item.node.fields.slug} className="mt-2">
              <Link to={item.node.fields.slug} className=" px-2 lg:px-0">
                {item.node.frontmatter.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
`

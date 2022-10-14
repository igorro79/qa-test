import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as s from '../styles/home.module.css'
const BlogIndexPage = ({
  data: {
    postsAllMarkdownRemark: { edges: postEdges },
  },
}) => {
  console.log(postEdges)
  return (
    <Layout menuItems={postEdges}>
      <section className="max-w-3xl mx-auto px-2 sm:px-4 xl:max-w-5xl xl:px-0">
        <h1 className={s.title}>Специфікація до web-ресурсу</h1>
        <p>
          <strong>Web-ресурс</strong> призначений для ознайомлення з основами та
          базовими правилами мови програмування Java. Розрахований на нульовий
          рівень знань користувача у програмуванні.
        </p>
        <p>
          <strong>Web-ресурс</strong> складається з десяти сторінок із
          питаннями. На кожній сторінці є теоретична частина, в якій дано
          достатньо інформації для вирішення відповідного завдання.
        </p>
        <p>
          <strong>Web-ресурс</strong> є адаптивним: працює на різних пристроях,
          операційних системах і браузерах.
        </p>
      </section>
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query IndexPage {
    postsAllMarkdownRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 10
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`

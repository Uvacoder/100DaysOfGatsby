import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import ImageGallery from "../components/ImageGallery"
import ImageTransformCloudinary from "../components/imgtranscloudinary"
import SEO from "../components/seo"
import Layout from "../components/layout"

const dateColor = `purple`

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title={`Amazing Pandas Eating Things`} />
      <article>
        <header>
          <h1>
            Amazing Pandas Eating Things{" "}
            <small
              css={css`
                color: slategrey;
                display: inline-block;
              `}
            >
              {data.allMarkdownRemark.totalCount} Posts
            </small>
          </h1>
          <hr />
        </header>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2
              css={css`
                display: inline;
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <span
              css={css`
                color: ${dateColor};
                display: inline-block;
                font-size: 0.875rem;
                margin-left: 0.25rem;
              `}
            >
              — {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
        <h2>Image Transform Cloudinary</h2>
        <p>
          Here's a Gatsby site with optimized images using
          gatsby-transform-cloudinary
        </p>
        <ImageTransformCloudinary />
        <h2>Image Gallery</h2>
        <p>
          Here's a Gatsby site with optimized images in a masonry grid, served
          from{" "}
          <a
            href="https:cloudinary.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudinary
          </a>
        </p>
        <ImageGallery />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

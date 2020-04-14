import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ children }) => {
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      <article>
        <header>testing 123why</header>
        <div>{children}</div>
      </article>
    </Layout>
  )
}

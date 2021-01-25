import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card"
import Nav from "../components/Nav"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"

export default function home({ data }) {
  return (
    <div
      className="l-container"
    >
      <Nav
      />
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Card
          key={index}
          name={node.frontmatter.title}
          desc={node.rawMarkdownBody}
          type={node.frontmatter.type}
          btnLiveCopy={node.frontmatter.live_text}
          btnLiveHref={node.frontmatter.live_uri}
          btnGitCopy={node.frontmatter.gh_text}
          btnGitHref={node.frontmatter.gh_uri}  
          tags={node.frontmatter.tags}  
          priority={node.frontmatter.priority}         
        />
      ))}    
    </div>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___priority, order: ASC}) {
    edges {
      node {
        rawMarkdownBody
        frontmatter {
          title
          type
          live_uri
          live_text
          gh_uri
          gh_text
          priority
          tags
        }
      }
    }
  }
}
`
import React from "react"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"
import Intro from "../components/Intro.js"
import WorkExample from "../components/WorkExample.js"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data.workExamples);
  return (
    <div
      className="l-container"
    >
      {data.intro.edges.map(({ node }, index) => (
        <Intro
          key={index}        
        />
      ))}
      {data.workExamples.edges.map(({ node }, index) => (
        <WorkExample
          key={index}
          name={node.frontmatter.title}
          desc={node.rawMarkdownBody}
          btnLiveCopy={node.frontmatter.live_text}
          btnLiveHref={node.frontmatter.live_uri}
          btnGitCopy={node.frontmatter.gh_text}
          btnGitHref={node.frontmatter.gh_uri}         
        />
      ))}      
    </div>
  )
}

export const query = graphql`
{
  intro: allMarkdownRemark(filter: {frontmatter: {type: {eq: "intro"}}}) {
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
        }
      }
    }
  }
  workExamples: allMarkdownRemark(filter: {frontmatter: {type: {eq: "workExample"}}}) {
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
        }
      }
    }
  }
}
`
import React from "react"
import { graphql } from "gatsby"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Card from "../components/Card"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"
import HumbleBike from "../images/humblebike.png"

export default function home({ data }) {
  const pgnum = data.allMarkdownRemark.edges.length;
  return (
    <div
      className="l-container"
    >
      <Parallax
        pages={pgnum}
        scrolling
      >
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <ParallaxLayer
            offset={index}
            speed={0}
          >
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
          </ParallaxLayer>
        ))} 
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <ParallaxLayer
            offset={index + .1}
            speed={2}
          >
            <img 
              src={ HumbleBike }
              className="c-slide__parabgimg"
            />
          </ParallaxLayer>
        ))} 
      </Parallax>   
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
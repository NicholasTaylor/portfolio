import React from "react"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Videobg from '../components/Videobg'
import Project from "../components/Project"
import Parallaximg from "../components/Parallaximg"
import Nav from "../components/Nav"
import {graphql} from "gatsby"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"

export default function home({ data }) {
  return (
    <div
      className="l-container"
    >
      <Nav
      />
      <Parallax
        pages={data.allMarkdownRemark.edges.length}
        className="c-project"
      >
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div
            key={index}
          >          
            <ParallaxLayer
              offset={index}
            >
              <Videobg
                  src={node.frontmatter.videobg ? node.frontmatter.videobg.publicURL : '' }
              />
              <Project
                name={node.frontmatter.title}
                desc={node.rawMarkdownBody}
                type={node.frontmatter.type}
                btnLiveCopy={node.frontmatter.live_text}
                btnLiveHref={node.frontmatter.live_uri}
                btnGitCopy={node.frontmatter.gh_text}
                btnGitHref={node.frontmatter.gh_uri}  
                tags={node.frontmatter.tags}  
                priority={node.frontmatter.priority}
                xalign={node.frontmatter.xalign}
                yalign={node.frontmatter.yalign}
              />
            </ParallaxLayer>
            <Parallaximg
              index={index}
              img={node.frontmatter.parallaximg}
              offset={node.frontmatter.parallaxoffset}
              speed={node.frontmatter.parallaxspeed}
              align={node.frontmatter.parallaxalign}
            >
            </Parallaximg>
          </div>
        ))}
      </Parallax>  
    </div>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___priority, order: ASC}, filter: {frontmatter: {type: {nin: "aboutme"}}}) {
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
          xalign
          yalign
          parallaximg {
            publicURL
          }
          parallaxoffset
          parallaxspeed
          parallaxalign
          videobg {
            publicURL
          }
        }
      }
    }
  }
}
`
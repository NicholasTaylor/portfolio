import React from "react"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Project from "../components/Project"
import Nav from "../components/Nav"
import Parallaximg from "../components/Parallaximg"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"

export default function home({ data }) {
  let parallax;
  return (
    <div
      className="l-container"
    >
      <Nav
      />
      <Parallax
        pages={data.allMarkdownRemark.edges.length}
      >
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div
            key={index}
          >          
            <ParallaxLayer
              className="c-slide__container"
              offset={index}
            >
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
                videobg={node.frontmatter.videobg ? node.frontmatter.videobg.publicURL : '' } 
                parallaximg={node.frontmatter.parallaximg ? node.frontmatter.parallaximg.publicURL : '' } 
                parallaxoffset={node.frontmatter.parallaxoffset}
                parallaxspeed={node.frontmatter.parallaxspeed}
              />
            </ParallaxLayer>
            <Parallaximg
              index={index}
              img={node.frontmatter.parallaximg}
              offset={node.frontmatter.parallaxoffset}
              speed={node.frontmatter.parallaxspeed}
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
          parallaximg {
            publicURL
          }
          parallaxoffset
          parallaxspeed
          videobg {
            publicURL
          }
        }
      }
    }
  }
}
`
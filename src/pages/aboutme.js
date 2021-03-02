import React from "react"
import "../styles/bootstrap-reboot.min.css"
import "../styles/site.scss"
import AboutImg from '../components/AboutImg'
import Nav from "../components/Nav"

export default function aboutme({ data }) {
  return (
    <div
      className="l-container"
    >
        <Nav
        />
        <div
            className="c-aboutme"
        >
            <div
                className="c-aboutme__content"
            >
                <div
                    className="c-aboutme__copy"
                >
                    I've been coding professionally in some way, shape or form since 2008. 
                </div>
                <div
                    className="c-aboutme__headline"
                >
                    Some Brands I've Worked&nbsp;With
                </div>
                <div
                    className="c-aboutme__list"
                >
                    {data.allMarkdownRemark.edges[0].node.frontmatter.brands.map((i, index) => (
                        <AboutImg
                            src={i.src.publicURL}
                            alt={i.name}
                            key={index}
                        />
                    ))}
                </div>
                <div
                    className="c-aboutme__headline"
                >
                    Languages and&nbsp;Frameworks
                </div>
                <div
                    className="c-aboutme__list"
                >
                    {data.allMarkdownRemark.edges[0].node.frontmatter.skills.map((i, index) => (
                        <AboutImg
                            src={i.src.publicURL}
                            alt={i.name}
                            key={index}
                        />
                    ))}
                </div>
                <div
                    className="c-aboutme__headline"
                >
                    Adobe Creative&nbsp;Cloud
                </div>
                <div
                    className="c-aboutme__list"
                >
                    Photoshop, Illustrator, XD, Audition, Premiere Pro, After Effects

                </div>
            </div>
        </div>
    </div>
  )
}

export const query = graphql`
query aboutMe {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "aboutme"}}}) {
    edges {
      node {
        frontmatter {
          skills {
            name
            src {
              publicURL
            }
          }
          brands {
            name
            src {
              publicURL
            }
          }
        }
      }
    }
  }
}


`
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
                    className="c-aboutme__headline"
                >
                    About Me
                </div>
                <div
                    className="c-aboutme__copy"
                >
                  <p>
                    It all started with a bored teenager who right-clicked and chose the "View Source" option in Internet Explorer. We've all done it and saw the mass of code that ensues. But back then, I was curious how it worked. How did it all come together to build the beautiful websites we saw?
                  </p>
                  <p>
                    Many hours, months, and years of experimentation later, I began professionally coding HTML and CSS in 2008. Along the way, I picked up a variety of other skills in the web development landscape (SQL, Python, etc.). Meanwhile, I formed an appreciation for how "the other half" lives by working as a production artist on a design team and as a marketing professional for a few years.
                  </p>
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
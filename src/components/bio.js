import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "../app.css"

//import { rhythm } from "../utils/typography"

function Bio() {
  return (

    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container className="blog-container">
            <p className="para blog-para">
              A blog about learning web design written by <strong>{author}</strong>, using a framework built upon the
              React library.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`} className="link blog-link">
                Follow me on Twitter
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }

`

const Container = styled.div`
  display: flex;
`

export default Bio

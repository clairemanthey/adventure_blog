
import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import { graphql, Link as GastbyLink } from "gatsby"
import Seo from "../components/Seo"

const StyledH1 = styled.h1`
  font-size: 60px;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  margin-top: 24px;
`
const Link = styled(GastbyLink)`
  text-decoration: none;
`
const LayoutLink = styled(GastbyLink)`
  text-decoration: none;
  font-size: 12px;
`

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

export default function TagPage({ data: { allMdx }, pageContext: { tag, slugs } }) {

  const posts = allMdx.edges

  return <Layout content={<LayoutLink to="/">About me</LayoutLink>}>
    <Seo title={`#${tag}`} />
    <Wrapper>
      <StyledH1>#{tag}</StyledH1>
      <List>
        {posts.map(({ node }) => <Item key={node.slug}>
          <Link to={`/blog/${node.slug}`}>
            {node.frontmatter.title}
          </Link>
        </Item>)}
      </List>
    </Wrapper>
  </Layout >
}

export const pageQuery = graphql`
  query($slugs: [String]) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {in: $slugs }}) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
          slug
        }
      }
    }
  }
`

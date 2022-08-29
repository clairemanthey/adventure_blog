import React from "react"
import { Link } from "gatsby"
import "../app.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "../components/Header"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Adventures in Web Design"

    return (
      <main className="main">
      <Header />
      <Layout location={this.props.location} title={siteTitle} >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1 className="header-one">
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p className="para para-home">Welcome to my blog. Follow me along my journey to making the web a more beautiful place.</p>
        <p className="para para-home">Starting from the basics with HTML and working up to add functionality with JS and making it look
        good with CSS.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
      </main>
    )
  }
}

export default IndexPage

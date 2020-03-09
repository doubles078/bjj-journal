import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import "antd/dist/antd.css"
import "../styles/layout.scss"
import { Layout as AntLayout } from "antd"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { Content, Footer } = AntLayout
  return (
    <AntLayout className="Layout">
      <Header siteTitle={data.site.siteMetadata.title} />

      <Content>{children}</Content>
      <Footer>© {new Date().getFullYear()} ⚔️👊🥋</Footer>
    </AntLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

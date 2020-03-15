import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import "antd/dist/antd.css"
import "../styles/layout.scss"
import { Layout as AntLayout } from "antd"
import { AppMenu } from "./appMenu"

import Header from "./header"

const Layout = ({ showMenu = true, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const styles = showMenu ? { padding: "24px 48px" } : {}
  const { Content } = AntLayout
  return (
    <AntLayout className="Layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <AntLayout>
        {showMenu && <AppMenu />}
        <AntLayout style={styles}>
          <Content>{children}</Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

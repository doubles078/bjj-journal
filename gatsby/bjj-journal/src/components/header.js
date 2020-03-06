import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Layout, Row, Col } from "antd"
import "../styles/header.scss"

const Header = ({ siteTitle }) => {
  const { Header } = Layout
  return (
    <Header style={{ background: "#1934aa" }}>
      <Row>
        <Col>
          <div className="logo" />
        </Col>
        <Col style={{ marginLeft: "auto", color: "#fff" }}>
          <Row>
            <Col>
              <Link to="/signin">Sign in</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

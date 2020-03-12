import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { Layout, Row, Col } from "antd"

import { isLoggedIn, logout } from "../services"
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
              <Link to="/app/login">Login</Link>
            </Col>
            {isLoggedIn() ? (
              <>
                <Col>
                  <Link to="/app/dashboard">Dashboard</Link>
                </Col>
                <Col>
                  <Link to="/app/profile">Profile</Link>
                </Col>
                <Col>
                  <a
                    href="/"
                    onClick={event => {
                      event.preventDefault()
                      logout(() => navigate(`/app/login`))
                    }}
                  >
                    Logout
                  </a>{" "}
                </Col>
              </>
            ) : null}
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

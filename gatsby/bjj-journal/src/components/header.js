import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { Button, Menu, Layout, Row, Col } from "antd"
import { Dropdown } from "antd"
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"

import { isLoggedIn, logout } from "../services"
import "../styles/header.scss"

const Header = () => {
  const { Header } = Layout

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/app/profile">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/login`))
          }}
        >
          <LogoutOutlined /> Logout
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header style={{ background: "#1934aa" }}>
      <Row>
        <Col>
          <Link to="/">
            <div className="logo" />
          </Link>
        </Col>
        <Col style={{ marginLeft: "auto", color: "#fff" }}>
          <Row>
            {isLoggedIn() ? (
              <Col>
                <Dropdown overlay={menu}>
                  <Button>
                    <UserOutlined />
                  </Button>
                </Dropdown>
              </Col>
            ) : (
              <Col>
                <Link to="/login">Login</Link>
              </Col>
            )}
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

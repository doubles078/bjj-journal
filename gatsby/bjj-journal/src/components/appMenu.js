import React, { useState } from "react"
import { Menu, Layout } from "antd"
import { Link } from "gatsby"

import {
  BarChartOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons"

export const AppMenu = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout
  return (
    <Sider
      collapsible
      theme="light"
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        if (broken) {
          setCollapsed(true)
        }
      }}
      onCollapse={() => setCollapsed(!collapsed)}
      zeroWidthTriggerStyle={{ backgroundColor: "#1934aa", color: "#fff" }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={{ minHeight: "calc(100vh - 64px)", position: "relative" }}
      >
        <Menu.Item key="1">
          <Link to="/app/dashboard">
            <BarChartOutlined />
            <span>Stats</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/app/feed">
            <UnorderedListOutlined />
            <span>Feed</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/app/log">
            <PlusOutlined />
            <span>Add new session</span>{" "}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

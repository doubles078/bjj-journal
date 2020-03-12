import React, { useState } from "react"
import { Menu, Button, Layout } from "antd"
import {
  BarChartOutlined,
  DesktopOutlined,
  PlusOutlined,
  UserOutlined,
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
          <BarChartOutlined />
          <span>Stats</span>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Feed</span>
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="3">
          <PlusOutlined />
          <span>Add new session</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

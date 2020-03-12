import React from "react"
import { Card, Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Layout from "../components/layout"

const SignUp = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values)
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Card style={{ width: 300, margin: "4rem auto" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input a Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password-repeat"
            rules={[{ required: true, message: "Please re-enter Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>{" "}
            or <a href="/">sign in</a>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default SignUp

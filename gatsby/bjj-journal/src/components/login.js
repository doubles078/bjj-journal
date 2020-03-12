import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Card, Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { handleLogin, isLoggedIn } from "../services"

import "../styles/login.scss"

const Login = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values)

    // values = { username: x, password: x }
    handleLogin(values)

    if (isLoggedIn()) {
      navigate(`/app/dashboard`)
    }
  }

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/app/dashboard`)
    }
  }, [])

  return (
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
          rules={[{ required: true, message: "Please input your Password!" }]}
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
            Log in
          </Button>{" "}
          or <a href="/signup">sign up</a>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login

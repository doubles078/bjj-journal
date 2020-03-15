import React from "react"
import { Form, Input, Button, Select } from "antd"
import { getUser } from "../services"

const Profile = () => {
  const user = getUser()
  const { TextArea } = Input
  const { Option } = Select
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  }

  return (
    <div>
      <Form
        {...layout}
        layout="horizontal"
        size={"medium"}
        initialValues={{ username: user.username }}
      >
        <Form.Item {...tailLayout}>
          <h1>Your profile</h1>
        </Form.Item>

        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Belt" name="belt">
          <Select defaultValue="white">
            <Option value="none">N/A</Option>
            <Option value="white">White</Option>
            <Option value="blue">Blue</Option>
            <Option value="purple">Purple</Option>
            <Option value="brown">Brown</Option>
            <Option value="black">Black</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Current BJJ Goal">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Profile

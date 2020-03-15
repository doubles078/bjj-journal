import React from "react"
import { Form, Input, Button, Radio, Select, Tooltip } from "antd"

export const LogSession = () => {
  const { TextArea } = Input
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
      <Form {...layout} layout="horizontal" size={"medium"}>
        <Form.Item {...tailLayout}>
          <h1>Log a training session</h1>
        </Form.Item>
        <Form.Item label="Class" name="class">
          <Radio.Group>
            <Radio.Button value="gi">Gi</Radio.Button>
            <Radio.Button value="nogi">No Gi</Radio.Button>
            <Radio.Button value="mma">MMA</Radio.Button>
            <Radio.Button value="striking">Striking</Radio.Button>
            <Radio.Button value="wrestling">Wrestling</Radio.Button>
            <Radio.Button value="openmat">Open Mat</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<Tooltip title="Main Technique or Focus">Title</Tooltip>}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Notes">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Tags">
          <Select mode="tags" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>{" "}
        </Form.Item>
      </Form>
    </div>
  )
}

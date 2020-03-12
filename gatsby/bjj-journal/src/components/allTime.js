import React from "react"
import { Table, Tag } from "antd"

const { Column } = Table

const data = [
  {
    key: "1",
    date: "12/1/2020",
    title: "Backtakes from side control",
    style: "NoGi",
    tags: ["wrestling"],
  },
  {
    key: "2",
    date: "12/2/2020",
    title: "Armbars from other",
    style: "NoGi",
    tags: ["nogi", "guard"],
  },
  {
    key: "3",
    date: "12/3/2020",
    title: "Armbars from guard",
    style: "Wrestling",
    tags: [],
  },
]

export const AllTime = () => {
  return (
    <Table dataSource={data}>
      <Column title="Date" dataIndex="date" key="date" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Style" dataIndex="style" key="style" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <span>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        )}
      />
      <Column
        title="Link"
        key="link"
        render={(text, record) => (
          <span>
            <a>Link</a>
          </span>
        )}
      />
    </Table>
  )
}

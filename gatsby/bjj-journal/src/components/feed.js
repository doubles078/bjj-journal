import React from "react"
import { Tag, List, Card } from "antd"

const data = [
  {
    title: "Double leg takedown with underhook",
    date: "11/2/2019",
    copy:
      "Need to get: underhook, inside head control (your forehead on his/her chin), and opposite",
  },
  {
    title: "Armbars",
    date: "11/2/2019",
    copy: "Hard to do",
  },
  {
    title: "Cross collar choke from the side control kimura setup",
    date: "11/2/2019",
    copy:
      "Oh man, this was dope. Definitely always going for this in the Gi. Go for the trapped a",
  },
  {
    title: "Arm bar escapes",
    date: "11/2/2019",
    copy:
      "When trapped in an armbar with legs crossed, put one hand on your bicep and one under you",
  },
  {
    title: "Oma Plata sweep from standing guard break",
    date: "11/2/2019",
    copy:
      "Get a grip on the sleeve and pass it to the arm under the leg, then hip up into their arm",
  },
  {
    title: "Basic triangle attack from guard",
    date: "11/2/2019",
    copy:
      "Try one of two things if having trouble finishing the triangle. 1.) Push the arm towards",
  },
]

export const Feed = () => {
  const { Meta } = Card

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 5,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card>
            <Meta
              title={item.title}
              description={
                <>
                  <div style={{ fontWeight: "bold" }}>{item.date}</div>
                  <div>{item.copy}</div>
                  <div style={{ marginTop: "10px" }}>
                    <Tag color="blue">wrestling</Tag>
                    <Tag color="blue">whatever</Tag>
                    <Tag color="blue">seminar</Tag>
                  </div>
                </>
              }
            />
          </Card>
        </List.Item>
      )}
    />
  )
}

import React from "react"
import { Statistic, Card, Row, Col } from "antd"
import { ClassesTable } from "./classesTable"
import { AllTime } from "./allTime"

const Dashboard = () => {
  return (
    <Row gutter={8} style={{ margin: 0 }}>
      <Col span={24} style={{ margin: "12px 0" }}>
        <h1>March Summary</h1>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card>
          <Statistic
            title="Classes Tracked"
            value={11}
            valueStyle={{ color: "#2196F3" }}
          />
        </Card>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card>
          <Statistic
            title="Open Mat"
            value={9}
            valueStyle={{ color: "#4CAF50" }}
          />
        </Card>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card>
          <Statistic title="Gi" value={9} valueStyle={{ color: "#673AB7" }} />
        </Card>
      </Col>
      <Col xs={12} sm={12} md={12} lg={6}>
        <Card>
          <Statistic
            title="No Gi"
            value={3}
            valueStyle={{ color: "#607D8B" }}
          />
        </Card>
      </Col>

      <Col span={24} style={{ margin: "12px 0" }}>
        <h1>Previous 10 Classes</h1>

        <ClassesTable />
      </Col>

      <Col span={24} style={{ margin: "12px 0" }}>
        <h1>All Time Stats</h1>

        <AllTime />
      </Col>
    </Row>
  )
}

export default Dashboard

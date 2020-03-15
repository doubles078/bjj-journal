import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col } from "antd"
import Layout from "../components/layout"

import "../styles/homepage.scss"

const IndexPage = () => (
  <Layout showMenu={false}>
    <div className="Homepage">
      <Row style={{ maxWidth: "980px", margin: "auto" }}>
        <Col span={16}>
          <div className="Homepage__content">
            <h1 className="Homepage__title">
              TRACK YOUR GOALS AND PROGRESS TOWARDS BETTER JIU JITSU
            </h1>
            <p className="Homepage__copy">
              An open source application for tracking your Brazilian Jiu-Jitsu
              training.
            </p>
            <Button
              className="Homepage__cta"
              type="primary"
              shape="round"
              size={"large"}
            >
              <Link to="/login">GET STARTED</Link>
            </Button>
          </div>
        </Col>
      </Row>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFF"
          fillOpacity="1"
          d="M0,256L80,234.7C160,213,320,171,480,181.3C640,192,800,256,960,256C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="Homepage__bottom">
        <h3>
          REACH OUT TO{" "}
          <a
            href="https://twitter.com/doubles078"
            target="_blank"
            rel="noreferrer nofollow"
          >
            ME
          </a>{" "}
          FOR FEEDBACK
        </h3>
        <hr />
      </div>
    </div>
  </Layout>
)

export default IndexPage

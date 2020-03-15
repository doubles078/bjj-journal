import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import { Feed } from "../components/feed"
import { LogSession } from "../components/logSession"
import Login from "../components/login"
import Dashboard from "../components/dashboard"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/feed" component={Feed} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/log" component={LogSession} />
      <Login path="/login" />
    </Router>
  </Layout>
)

export default App

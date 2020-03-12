import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Dashboard from "../components/dashboard"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App

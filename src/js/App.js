import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Layout from './components/Layout'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
      </BrowserRouter>
    )
  }
}

export default App
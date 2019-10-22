import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import AboutMe from './pages/AboutMe.js'
import Blog from './pages/Blog.js'
import Portfolio from './pages/Portfolio.js'
import Contact from './pages/Contact.js'
import NotFound from './pages/NotFound.js'
import Layout from './components/Layout.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
            </Switch>
          </Layout>
      </BrowserRouter>
    )
  }
}

export default App
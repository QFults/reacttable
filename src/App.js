import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Home = () => {
  return (
    <h1>Home Page</h1>
  )
}

const Contact = () => {
  return (
    <h1>Contact Page</h1>
  )
}

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <Link to="/reacttable">Home</Link>
          <Link to="/reacttable/contact">Contact</Link>
        </nav>
        <Switch>
          <Route exact path="/reacttable" component={Home} />
          <Route path="/reacttable/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
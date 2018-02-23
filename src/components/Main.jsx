import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Showcase from './Showcase'
import Contact from './Contact'
import Login from '../containers/Login'
import CreateNewUser from './CreateNewUser'

var mainStyle = {
  textAlign: "",
  minHeight: '100%'
  };

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main style={mainStyle}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/CreateNewUser' component={CreateNewUser} />
      <Route path='/bio' component={Bio} />
      <Route path='/showcase' component={Showcase} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </main>
)

export default Main
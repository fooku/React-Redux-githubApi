import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/home'
import UserDerail from '../views/users/UserDetail'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users/:username" component={UserDerail} />
  </Switch>
)

export default Routing

import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import History from '../pages/HistoryPoints'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/history" component={History} isPrivate/>
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/register" component={Register} isPrivate/>
    </Switch>
  )
}

import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ExpenseDashboard from '../components/expense-dashboard/ExpenseDashboard'
import CreateExpense from '../components/CreateExpense'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import PrivateRoute from './PrivateRouter'
import PublicRoute from './PublicRouter'

export default () => (
  <Switch>
    <PublicRoute path="/" component={Login} exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
    <PrivateRoute path="/create" component={CreateExpense} />
    <PrivateRoute path="/edit/:id" component={EditExpense} />
    <Route component={NotFound} />
  </Switch>
)
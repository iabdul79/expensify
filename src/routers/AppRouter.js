import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ExpenseDashboard from '../components/expense-dashboard/ExpenseDashboard'
import CreateExpense from '../components/CreateExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'


export default () => (
  <Switch>
    <Route path="/" component={ExpenseDashboard} exact={true}/>
    <Route path="/create" component={CreateExpense} />
    <Route path="/edit/:id" component={EditExpense} />
    <Route path="/help" component={Help} />
    <Route component={NotFound} />
  </Switch>
)
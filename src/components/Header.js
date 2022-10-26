import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logoutRx } from '../actions/auth-actions'

export const Header = ({logOut}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName='is-active'>Dashboard</NavLink>
    <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>
    <button onClick={logOut}>Log Out</button>
  </header>
)
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logoutRx())
})
export default connect(undefined, mapDispatchToProps)(Header)
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutRx } from '../actions/auth-actions'

export const Header = ({logOut}) => (
  <header className="header">
    <div className="main-container header__container">
      <Link className="header__title" to="/dashboard">
        <h1>Expensify</h1>
      </Link>
      <button className="button button--link" onClick={logOut}>Log Out</button>
    </div>
  </header>
)
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logoutRx())
})
export default connect(undefined, mapDispatchToProps)(Header)
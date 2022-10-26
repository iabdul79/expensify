import React from 'react'
import { connect } from 'react-redux'
import { loginRx } from '../actions/auth-actions'

export const Login = ({login}) => (
  <div>
    <h1>Login</h1>
    <button onClick={login}>Log In</button>
  </div>
)

const mapDispatchToProps = (dispatch) => (
  {
    login: () => dispatch(loginRx())
  }
)

export default connect(undefined, mapDispatchToProps)(Login)

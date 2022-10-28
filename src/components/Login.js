import React from 'react'
import { connect } from 'react-redux'
import { loginRx } from '../actions/auth-actions'

export const Login = ({login}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Time to get your expense correct</p>
      <button className="button" onClick={login}>Login with Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => (
  {
    login: () => dispatch(loginRx())
  }
)

export default connect(undefined, mapDispatchToProps)(Login)

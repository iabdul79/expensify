import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({isAuthenticated, component: Component, ...restProps}) => (
  <Route {...restProps} component={(props) => {
    return isAuthenticated ? (
      <div>
        <Header {...props} />
        <Component {...props} />  
      </div>
      ) : (
        <Redirect to="/" />
      )
  }} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
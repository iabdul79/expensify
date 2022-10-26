import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

export const PublicRouter = ({isAuthenticated, component: Component, ...restProps}) => (
  <Route {...restProps} component={(props) => {
    return isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />  
      )
  }} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRouter)
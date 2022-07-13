// Higher Order Components (HOC): A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info</p>}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);
ReactDom.render(<AuthInfo isAuthenticated={true} info={'private message'} />, document.getElementById('root'))
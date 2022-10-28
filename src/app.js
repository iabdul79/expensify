import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/main.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configure-store'
import { setExpensesRx } from './actions/expense-actions'
import { onAuthChange } from './firebase/firebase-auth'
import { login, logout } from './actions/auth-actions'

const history = createBrowserHistory()

const store = configureStore()

const AppComponent = () => (
  <Router history={history}>
    <AppRouter />
  </Router>
)

const StateWrappedComponent = (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)

let isAppRendered = false
const renderApplication = () => {
  if (!isAppRendered) {
    ReactDOM.render(StateWrappedComponent, document.getElementById('root'))
    isAppRendered = true
  }
}

onAuthChange(
  (user) => {
    store.dispatch(login(user.uid))
    store.dispatch(setExpensesRx())
    renderApplication()
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  },
  () => {
    store.dispatch(logout())
    renderApplication()
    history.push('/')
  }
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))
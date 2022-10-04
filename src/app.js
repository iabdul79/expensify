import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/main.scss'
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configure-store'
import { Provider } from 'react-redux'

const store = configureStore();


const AppComponent = (
  <BrowserRouter>
    <div>
      <Header />
      <AppRouter />
    </div>
  </BrowserRouter>
)

const StateWrappedComponent = (
  <Provider store={store}>
    {AppComponent}
  </Provider>
)

ReactDOM.render(StateWrappedComponent, document.getElementById('root'))
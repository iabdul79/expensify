import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/main.scss'
import configureStore from './store/configure-store'
import {getVisibleExpense} from './selectors/expense-selectors'
import {addExpense, editExpense, removeExpense} from './actions/expense-actions'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters-actions'
import { Provider } from 'react-redux'

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 100}))
store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 109500}))

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpenses);


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
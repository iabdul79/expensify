import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ExpenseReducer from '../reducers/expense-reducer'
import FiltersReducer from '../reducers/filters-reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
  return createStore(
    combineReducers({
      expenses: ExpenseReducer,
      filters: FiltersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
}

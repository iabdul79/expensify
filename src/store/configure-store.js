import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import ExpenseReducer from '../reducers/expense-reducer'
import FiltersReducer from '../reducers/filters-reducer'
import AuthReducer from '../reducers/auth-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
  return createStore(
    combineReducers({
      expenses: ExpenseReducer,
      filters: FiltersReducer,
      auth: AuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
}

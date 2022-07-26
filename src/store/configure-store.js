import { createStore, combineReducers } from "redux";
import ExpenseReducer from "../reducers/expense-reducer";
import FiltersReducer from "../reducers/filters-reducer";

export default () => {
  return createStore(
    combineReducers({
      expenses: ExpenseReducer,
      filters: FiltersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

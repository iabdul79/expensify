import { createStore, combineReducers } from "redux";
import ExpenseReducer from "../reducers/expense-reducer";
import FiltersReducer from "../reducers/filters-reducer";

export default () => {
  return createStore(
    combineReducers({
      expenses: ExpenseReducer,
      filters: FiltersReducer,
    })
  )
}

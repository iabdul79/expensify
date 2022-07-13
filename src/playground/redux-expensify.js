import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}

// REMOVE_EXPENSE
const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, overrideExpense) => ({
  type: 'EDIT_EXPENSE',
  id,
  overrideExpense
})


const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {...expense, ...action.overrideExpense}
        }
        return expense
      })
    default:
      return state
  }
}

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'}
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'}
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate}
    default:
      return state
  }
}

// Filter expenses
const getVisibilityExpense = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters
  return expenses.filter(e => {
    const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate
    const textMatch = !text || e.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    return a.amount < b.amount ? 1 : -1
  })

}


const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
)

store.subscribe(() => {
  const {expenses, filters} = store.getState()
  const visibleExpenses =  getVisibilityExpense(expenses, filters)
  console.log(visibleExpenses)
})

const action1 = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 1000 }))
const action2 = store.dispatch(addExpense({ description: 'Coffee', amount: 100, createdAt: -1000 }))
// store.dispatch(removeExpense(action2.expense.id))
// store.dispatch(editExpense(action1.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('coff'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(999))
// store.dispatch(setStartDate())



const demoState = {
  expenses: [
    {
      id: 'i3y4u343lj43490f99j3j9',
      description: 'May Rent',
      note: 'Pay before 20th',
      amount: 54500,
      createdAt: 0,
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date
    startDate: undefined,
    endDate: undefined
  }
}
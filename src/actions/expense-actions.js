import { dbAddExpense, dbRemoveExpense, dbUpdateExpense, subscribeToExpenses } from '../firebase/firebase-operations'

// ADD_EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
type: 'REMOVE_EXPENSE',
id
})

// EDIT_EXPENSE
export const editExpense = (id, overrideExpense) => ({
type: 'EDIT_EXPENSE',
id,
overrideExpense
})

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const addExpenseRx = (expense = {}) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expense
    const expenseData = {description, note, amount, createdAt}
    const newExpense = await dbAddExpense(userId, expenseData)
    dispatch(addExpense(newExpense))
    return newExpense
  }
}

export const updateExpenseRx = (expenseId, expense = {}) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expense
    const expenseData = {description, note, amount, createdAt}
    const updateExpense = await dbUpdateExpense(userId, expenseId, expenseData)
    dispatch(editExpense(expenseId, updateExpense))
    return updateExpense
  }
}

export const removeExpenseRx = (id) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.uid
    await dbRemoveExpense(userId, id)
    dispatch(removeExpense(id))
  }
}

export const setExpensesRx = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid
    subscribeToExpenses(userId, (expenses) => {
      dispatch(setExpenses(expenses))
    })
  }
}
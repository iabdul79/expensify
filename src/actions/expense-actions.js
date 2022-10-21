import { dbAddExpense } from '../firebase/firebase-operations'

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

export const addExpenseRx = (expense = {}) => {
  return async dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expense
    const expenseData = {description, note, amount, createdAt}
    const newExpense = await dbAddExpense(expenseData)
    dispatch(addExpense(newExpense))
    return newExpense
  }
}
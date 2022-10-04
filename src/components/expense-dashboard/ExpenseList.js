import React from 'react'
import { connect } from 'react-redux'
import { getVisibleExpense } from '../../selectors/expense-selectors'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length ? <h1>Expense List</h1> : <h2> No Expenses Available</h2>}
    {props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
  </div>
)

const stateMapper = (state) => ({
  expenses: getVisibleExpense(state.expenses, state.filters)
})
const connector = connect(stateMapper)

export default connector(ExpenseList)
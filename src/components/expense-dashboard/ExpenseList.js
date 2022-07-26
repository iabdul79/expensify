import React from 'react'
import { connect } from 'react-redux'
import { getVisibleExpense } from '../../selectors/expense-selectors'
import ExpenseItem from './ExpenseItem'
import { removeExpense } from '../../actions/expense-actions'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
  </div>
)

const stateMapper = (state) => ({
  expenses: getVisibleExpense(state.expenses, state.filters)
})
const connector = connect(stateMapper)

export default connector(ExpenseList)
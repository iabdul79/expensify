import React from 'react'
import { connect } from 'react-redux'
import { getVisibleExpense } from '../../selectors/expense-selectors'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = (props) => (
  <div className="main-container">
    <div className="list__header">
      <div className="for-mobile">Expense</div>
      <div className="for-desktop">Expense</div>
      <div className="for-desktop">Amount</div>
    </div>
    <div className="list__body">
      {
        props.expenses.length ?
        props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />) : 
        <div className="list-item list-item__message">
          <span> No Expenses Available</span>
        </div>
      }
    </div>
  </div>
)

const stateMapper = (state) => ({
  expenses: getVisibleExpense(state.expenses, state.filters)
})
const connector = connect(stateMapper)

export default connector(ExpenseList)
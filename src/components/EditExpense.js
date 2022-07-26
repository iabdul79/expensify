import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expense-actions'
import ExpenseForm from './ExpenseForm'

const EditExpense = (props) => (
  <div>
    {props.expenseId &&
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(updatedExpense) => {
          props.dispatch(editExpense(props.expenseId, updatedExpense))
          props.history.push('/')
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense(props.expenseId))
        props.history.push('/')}}
      >Remove</button>
    </div>}
  </div>
)

const connector = connect((state, props) => ({
  expenseId: props.match.params.id,
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
}))

export default connector(EditExpense)


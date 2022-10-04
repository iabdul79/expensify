import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expense-actions'
import ExpenseForm from './ExpenseForm'

export class EditExpense extends React.Component {
  editExpense = (updatedExpense) => {
    this.props.editExpense(this.props.expenseId, updatedExpense)
    this.props.history.push('/')
  }
  removeExpense = () => {
    this.props.removeExpense(this.props.expenseId)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      {this.props.expenseId &&
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.editExpense}
        />
        <button onClick={this.removeExpense}
        >Remove</button>
      </div>}
    </div>
    )
  }
}

const mapStateToProp = (state, props) => (
  {
    expenseId: props.match.params.id,
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
)

const mapDispatchToProp = (dispatch) => (
  {
    editExpense: (expenseId, updateExpense) => dispatch(editExpense(expenseId, updateExpense)),
    removeExpense: (expenseId) => dispatch(removeExpense(expenseId))
  }
)

const connector = connect(mapStateToProp, mapDispatchToProp)

export default connector(EditExpense)


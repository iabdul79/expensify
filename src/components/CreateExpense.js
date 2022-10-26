import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpenseRx} from '../actions/expense-actions'


export class AddExpense extends React.Component {
  addExpense = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.addExpense}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpenseRx(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpense)
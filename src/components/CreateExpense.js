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
        <div className="page-header">
          <div className="main-container">
            <h1 className="page-header__title">Save Expense</h1>
          </div>
        </div>
        <div className="main-container">
          <ExpenseForm
            onSubmit={this.addExpense}
          />
        </div>
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
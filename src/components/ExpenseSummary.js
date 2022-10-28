import React from 'react'
import numeral from 'numeral'
import { getVisibleExpense } from '../selectors/expense-selectors'
import { getExpenseTotal } from '../selectors/expense-total'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class ExpenseSummary extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="main-container">
          <h1 className="page-header__title">
            Viewing <span>{this.props.count}</span> expenses totalling <span>{this.props.total}</span>
          </h1>
          <div className="page-header__action">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const expenses = getVisibleExpense(state.expenses, state.filters)
  return {
    count: expenses.length,
    total: numeral(getExpenseTotal(expenses)).format('$0,0.00')
  }
}

const connector = connect(mapStateToProps)

export default connector(ExpenseSummary)
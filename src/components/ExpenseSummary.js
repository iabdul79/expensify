import React from 'react'
import numeral from 'numeral'
import { getVisibleExpense } from '../selectors/expense-selectors'
import { getExpenseTotal } from '../selectors/expense-total'
import { connect } from 'react-redux'

export class ExpenseSummary extends React.Component {
  render() {
    return (
      <p>
        {`Viewing ${this.props.count} expenses totalling ${numeral(this.props.total).format('$0,0.00')}` }
      </p>
    )
  }
}

const mapStateToProps = (state) => {
  const expenses = getVisibleExpense(state.expenses, state.filters)
  return {
    count: expenses.length,
    total: getExpenseTotal(expenses)
  }
}

const connector = connect(mapStateToProps)

export default connector(ExpenseSummary)
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from '../ExpenseListFilter'
import ExpenseSummary from '../ExpenseSummary'

export default () => (
  <div>
    <ExpenseListFilter />
    <ExpenseSummary />
    <ExpenseList />
  </div>
)
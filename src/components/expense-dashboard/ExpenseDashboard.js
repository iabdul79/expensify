import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from '../ExpenseListFilter'

export default () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
)
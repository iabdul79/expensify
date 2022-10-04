import React from 'react'
import {shallow} from 'enzyme'
import ExpenseItem from '../../components/expense-dashboard/ExpenseItem'
import expenses from '../fixtures/expenses'

test('should show expense item details for a passed item', () => {
  const wrapper = shallow(<ExpenseItem expense={expenses[2]} />)
  expect(wrapper).toMatchSnapshot()
})
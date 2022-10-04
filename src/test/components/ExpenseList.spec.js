import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/expense-dashboard/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render Expense list component', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should show no expense available on expense list component test', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>)
  expect(wrapper).toMatchSnapshot()
})
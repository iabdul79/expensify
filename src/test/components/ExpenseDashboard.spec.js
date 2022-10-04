import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboard from '../../components/expense-dashboard/ExpenseDashboard'

test('should render expense dashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboard />)
  expect(wrapper).toMatchSnapshot()
})
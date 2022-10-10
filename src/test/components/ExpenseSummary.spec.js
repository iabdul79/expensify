import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('should render summary component', () => {
  const wrapper = shallow(<ExpenseSummary count={3} total={1234} />)
  expect(wrapper).toMatchSnapshot()
})
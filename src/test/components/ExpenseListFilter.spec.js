import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilter} from '../../components/ExpenseListFilter'
import {defaultFilters, testFilters} from '../fixtures/filters'

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByAmount = jest.fn()
  sortByDate = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(<ExpenseListFilter
    filters={defaultFilters}
    setTextFilter={setTextFilter}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />)
})

test('render expense list filter component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('render expense list filter component with test filter data', () => {
  wrapper.setProps({
    filters: testFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const text = 'bills'
  wrapper.find('input').simulate('change', {target: {
    value: text
  }})
  expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test('should handle sort by amount', () => {
  const sortBy = 'amount'
  wrapper.find('select').simulate('change', {target: {
    value: sortBy
  }})
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle sort by date', () => {
  const sortBy = 'date'
  wrapper.find('select').simulate('change', {target: {
    value: sortBy
  }})
  expect(sortByDate).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const {startDate, endDate} = testFilters
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})


import React from 'react'
import {shallow} from 'enzyme'
import {AddExpense} from '../../components/CreateExpense'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
  addExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />)
})

test('should render create-expense component page', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])

})
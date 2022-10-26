import React from 'react'
import {shallow} from 'enzyme'
import {EditExpense} from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let wrapper, editExpense, removeExpense, history, expenseId, expense

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = {push: jest.fn()}
  expenseId = expenses[1].id
  expense = expenses[1]
  wrapper = shallow(
  <EditExpense
    expenseId={expenseId}
    expense={expense}
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
  />)
})

test('should have a edit expense component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should call edit expense with the given id and updated expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(editExpense).toHaveBeenLastCalledWith(expenseId, expense)
})

test('should call remove expense with the given id', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/dashboard')
  expect(removeExpense).toHaveBeenLastCalledWith(expenseId)
})
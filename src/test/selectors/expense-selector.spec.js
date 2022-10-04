import moment from 'moment'
import {getVisibleExpense} from '../../selectors/expense-selectors'
import expenses from '../fixtures/expenses'

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

test('should filter by text', () => {
  const testFilter = {...filters, text: 'e'}
  const result = getVisibleExpense(expenses, testFilter)
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
  const testFilter = {...filters, startDate: moment(0)}
  const result = getVisibleExpense(expenses, testFilter)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
  const testFilter = {...filters, endDate: moment(0).add(2, 'days')}
  const result = getVisibleExpense(expenses, testFilter)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort expenses by created date', () => {
  const result = getVisibleExpense(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort expenses by amount', () => {
  const testFilter = {...filters, sortBy: 'amount'}
  const result = getVisibleExpense(expenses, testFilter)
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
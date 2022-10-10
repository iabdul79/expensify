import { getExpenseTotal } from '../../selectors/expense-total'
import expenses from '../fixtures/expenses'

test('should give expense summary for expenses list with correct total', () => {
  const result = getExpenseTotal(expenses)
  expect(result).toBe(132520)
})

test('should give expense summary for zero expenses with a correct total', () => {
  const result = getExpenseTotal([])
  expect(result).toBe(0)
})

test('should give expense summary for a single expense with a correct total', () => {
  const result = getExpenseTotal([expenses[1]])
  expect(result).toBe(120300)
})
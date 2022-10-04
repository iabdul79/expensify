import { addExpense, removeExpense, editExpense } from '../../actions/expense-actions'

test('should setup remove expense action object', () => {
  const action = removeExpense('abc123')
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', {amount: 300})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    overrideExpense: {
      amount: 300
    }
  })
})

test('should setup add expense action object with values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This is last month rent',
    amount: 300040,
    createdAt: 1000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with defaults', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
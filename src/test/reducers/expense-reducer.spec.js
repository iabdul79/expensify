import expenseReducer from '../../reducers/expense-reducer'
import expenses from '../fixtures/expenses'

test('should setup default expense state', () => {
  const state = expenseReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense for a given id', () => {
  const state = expenseReducer(expenses , {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  })
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense for a given id not found', () => {
  const state = expenseReducer(expenses , {
    type: 'REMOVE_EXPENSE',
    id: '8'
  })
  expect(state).toEqual(expenses)
})

test('should add expense to the state', () => {
  const state = expenseReducer(undefined, {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  })
  expect(state).toEqual([expenses[0]])
})

test('should edit expense for a given id', () => {
  const note = 'additional note'
  const overrideExpense = {...expenses[0], note}
  const state = expenseReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    overrideExpense
  })
  expect(state[0].note).toBe(note)
})

test('should not edit expense for a given id not found', () => {
  const note = 'additional note'
  const overrideExpense = {...expenses[0], note}
  const state = expenseReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '8',
    overrideExpense
  })
  expect(state).toEqual(expenses)
})
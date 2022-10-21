import configureMockStore from 'redux-mock-store'
import { addExpense, removeExpense, editExpense, addExpenseRx } from '../../actions/expense-actions'
import expenses from '../fixtures/expenses'
import thunk from 'redux-thunk'
import { dbAddExpense } from '../../firebase/firebase-operations'
jest.mock('../../firebase/firebase-operations')

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[1])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  })
})

test('should add expense to database and store for given values', async () => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    note: 'for laptop',
    amount: 3020,
    createdAt: 1000
  }
  const response =  new Promise((res, rej) => {
    res({
      id: 'test_sample_id_2',
      ...expenseData
    })
  })
  dbAddExpense.mockResolvedValue(response)
  await store.dispatch(addExpenseRx(expenseData))
  const action = store.getActions()[0]
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
  expect(action.expense.id).toBe('test_sample_id_2')
})

test('should add expense to database and store with default values', async () => {
  const store = createMockStore({})
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const response =  new Promise((res, rej) => {
    res({
      id: 'test_sample_id_1',
      ...defaultExpense
    })
  })
  dbAddExpense.mockResolvedValue(response)
  await store.dispatch(addExpenseRx())
  const action = store.getActions()[0]
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...defaultExpense
    }
  })
  expect(action.expense.id).toBe('test_sample_id_1')
})

// test('should setup add expense action object with defaults', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })
import configureMockStore from 'redux-mock-store'
import { addExpense, removeExpense, editExpense, addExpenseRx, setExpenses, setExpensesRx } from '../../actions/expense-actions'
import expenses from '../fixtures/expenses'
import thunk from 'redux-thunk'
import { dbAddExpense, subscribeToExpenses } from '../../firebase/firebase-operations'
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

test('should update expenses to the store', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
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
  dbAddExpense.mockResolvedValue(
      Promise.resolve({
      id: 'test_sample_id_2',
      ...expenseData
    })
  )
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
  dbAddExpense.mockResolvedValue(
    Promise.resolve({
      id: 'test_sample_id_1',
      ...defaultExpense
    })
  )
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

test('should update expenses to the store from database', () => {
  const store = createMockStore({})
  subscribeToExpenses.mockImplementation((callback) => {
    callback(expenses)
  })
  store.dispatch(setExpensesRx())
  const action = store.getActions()[0]
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})
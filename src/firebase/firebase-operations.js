import firebaseApp from './firebase'
import {getDatabase, ref, push, onValue, remove, set} from 'firebase/database'

const database = getDatabase(firebaseApp)
const expensesRef = ref(database, 'expenses')

export const subscribeToExpenses = (callback) => {
  const expenses = []
  onValue(expensesRef, snapshot => {
    snapshot.forEach(shot => {
      expenses.push({
        id: shot.key,
        ...shot.val()
      })
    })
    callback(expenses)
  },
  {
    onlyOnce: true
  })
}

export const dbAddExpense = async (expense) => {
  const pushRef = push(expensesRef)
  await set(pushRef, expense)
  return {
    id: pushRef.key,
    ...expense
  }
}

export const dbUpdateExpense = async (expenseId, expense) => {
  const updateRef = ref(database, `expenses/${expenseId}`)
  await set(updateRef, expense)
  return {
    id: updateRef.key,
    ...expense
  }
}

export const dbRemoveExpense = (expenseId) => {
  return remove(ref(database, `expenses/${expenseId}`))
}
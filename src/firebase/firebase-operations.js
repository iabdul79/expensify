import firebaseApp from './firebase'
import {getDatabase, ref, push, onValue, remove, set} from 'firebase/database'

const database = getDatabase(firebaseApp)

export const subscribeToExpenses = (userId, callback) => {
  const expenses = []
  onValue(ref(database, getUserRefPath(userId)), snapshot => {
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

export const dbAddExpense = async (userId, expense) => {
  const pushRef = push(ref(database, getUserRefPath(userId)))
  await set(pushRef, expense)
  return {
    id: pushRef.key,
    ...expense
  }
}

export const dbUpdateExpense = async (userId, expenseId, expense) => {
  const updateRef = ref(database, getRefPath(userId, expenseId))
  await set(updateRef, expense)
  return {
    id: updateRef.key,
    ...expense
  }
}

export const dbRemoveExpense = (userId, expenseId) => {
  return remove(ref(database, getRefPath(userId, expenseId)))
}

const getUserRefPath = (userId) => `users/${userId}/expenses`;
const getRefPath = (userId, expenseId) => `${getUserRefPath(userId)}/${expenseId}`;
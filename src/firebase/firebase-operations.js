import firebaseApp from './firebase'
import {
  getDatabase, ref, push,
  child, get, off, onValue,
  remove, set, onChildRemoved,
  onChildChanged
} from 'firebase/database'

const database = getDatabase(firebaseApp)
const expensesRef = ref(database, 'expenses')

export const dbAddExpense = async (expense) => {
  const pushRef = push(expensesRef)
  await set(pushRef, expense)
  return {
    id: pushRef.key,
    ...expense
  }
}
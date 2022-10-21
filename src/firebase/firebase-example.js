import {initializeApp} from 'firebase/app'
import {child, get, getDatabase, off, onValue, ref, remove, set, push, onChildRemoved, onChildChanged} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCjrQ4-92cVS959nkkHxUCk0SEj53PCUJw",
  authDomain: "expensify-f68db.firebaseapp.com",
  databaseURL: "https://expensify-f68db-default-rtdb.firebaseio.com",
  projectId: "expensify-f68db",
  storageBucket: "expensify-f68db.appspot.com",
  messagingSenderId: "929494856191",
  appId: "1:929494856191:web:89c8bd52137f5b24d537ca"
};

const app = initializeApp(firebaseConfig)
const database = getDatabase()
const dbRef = ref(database)
// set(dbRef, {
//   name: 'Schweziers',
//   email: 'schiz@mailinator.com',
//   attr: {
//     weight: 40,
//     height: 150
//   }
// })

// remove(ref(database, 'attr/weight'))

// get(child(dbRef, '/')).then((snapshot) => console.log(snapshot.val()))
// set(ref(database, 'attr/height'))
// onValue(ref(database, '/'), (snapshot) => {
//   console.log(snapshot.val())
// })
// setTimeout(() => off(dbRef), 30*1000)

const expensesRef = ref(database, 'expenses')
// const newExpenseRef = push(expensesRef);
// set(newExpenseRef, {
//   description: 'Rent',
//   note: '',
//   amount: 190500,
//   createdAt: 9761248693
// });

// onValue(expensesRef, (snapshot) => {
//   const expenses = []
//   snapshot.forEach(child => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     })
//   })
//   console.log(expenses)
// })

onChildChanged(expensesRef, (snapshot) => console.log('change', snapshot.val()))
onChildRemoved(expensesRef, (snapshot) => console.log('remove', snapshot.val()))


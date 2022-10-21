export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {...expense, ...action.overrideExpense}
        }
        return expense
      })
    case 'SET_EXPENSES':
      state = action.expenses
      return state
    default:
      return state
  }
}

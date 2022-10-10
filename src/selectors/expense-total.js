export const getExpenseTotal = (expenses) => {
  const expenseTotal = (expenses ?? []).reduce((total, expense) => {
    total+=expense.amount
    return total
  }, 0)
  return expenseTotal
}
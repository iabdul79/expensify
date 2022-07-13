// Filter expenses
export const getVisibleExpense = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters
  return expenses.filter(e => {
    const startDateMatch = typeof startDate !== 'number' || e.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || e.createdAt <= endDate
    const textMatch = !text || e.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    return a.amount < b.amount ? 1 : -1
  })
}
import moment from "moment"

// Filter expenses
export const getVisibleExpense = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters
  return expenses.filter(e => {
    const createdMoment = moment(e.createdAt)
    const startDateMatch = startDate ? createdMoment.isSameOrAfter(startDate) : true
    const endDateMatch = endDate ? createdMoment.isSameOrBefore(endDate) : true
    const textMatch = !text || e.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    return a.amount < b.amount ? 1 : -1
  })
}
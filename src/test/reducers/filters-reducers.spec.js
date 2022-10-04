import moment from "moment"
import filtersReducer from "../../reducers/filters-reducer"

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('should set the default filter state', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual(defaultFilterState)
})

test('should set sort by amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should set sort by date', () => {
  const prevState = {...defaultFilterState, sortBy: 'amount'}
  const state = filtersReducer(prevState, {type: 'SORT_BY_DATE'})
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'e'
  })
  expect(state.text).toBe('e') 
})

test('should set start date', () => {
  const startDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  })
  expect(state.startDate).toEqual(startDate) 
})

test('should end start date', () => {
  const endDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  })
  expect(state.endDate).toEqual(endDate) 
})
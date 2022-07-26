import React from 'react'
import { connect } from 'react-redux'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters-actions'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calenderFocused: 'startDate',
    }
  }

  onDatesChanged = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={this.props.filters.sortBy} onChange={(e) => {
          const sortBy = e.target.value
          const action = sortBy === 'amount' ? sortByAmount : sortByDate
          this.props.dispatch(action())
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChanged}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={'DD MMM YYYY'}
        />
      </div>
    )
  }
}

const stateMapper = (state) => ({
  filters: state.filters
})
const connector = connect(stateMapper)

export default connector(ExpenseListFilter)
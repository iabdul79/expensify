import React from 'react'
import { connect } from 'react-redux'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters-actions'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calenderFocused: 'startDate',
    }
  }

  onFilterTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortByChange = (e) => {
    const sortBy = e.target.value
    const action = sortBy === 'amount' ? 'sortByAmount' : 'sortByDate'
    this.props[action]()
  }

  onDatesChanged = ({startDate, endDate}) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onFilterTextChange}/>
        <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
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

const mapDispatchToProps = (dispatch) => (
  {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  }
)

const connector = connect(stateMapper, mapDispatchToProps)

export default connector(ExpenseListFilter)
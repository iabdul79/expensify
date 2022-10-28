import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    const {
      description = '',
      note = '',
      createdAt = undefined,
      amount = ''
    } = props.expense ?? {}
    this.state = {
      description,
      note,
      createdAt: moment(createdAt),
      amount: parseFloat(amount / 100).toString(),
      calenderFocused: false,
      error: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.expense && prevProps.expense?.id !== this.props.expense.id) {
      this.setState(() => {
        const {
          description,
          note,
          createdAt,
          amount
        } = this.props.expense
        return {
          description,
          note,
          createdAt: moment(createdAt),
          amount: parseFloat(amount / 100).toString(),
          calenderFocused: false,
          error: ''
        }
      })
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChanged = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({calenderFocused: focused}))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description and amount.'}))
      return
    }
    this.setState(() => ({error: ''}))
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <h4 className="form__error"><i>{this.state.error}</i></h4>}
        <input
          type="text"
          className="input-text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChanged}
          focused={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={'DD MMM YYYY'}
        />
        <textarea
          className="input-textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Add expense</button>
        </div>
      </form>
    )
  }
}
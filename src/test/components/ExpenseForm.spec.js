import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render expense form component', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should fill expense form for given data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'New Description'
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'New Notes'
  wrapper.find('textarea').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount value on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '12.34'
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount value on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '12.234'
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('0')
})

test('should emit submit on form submit', () => {
  const submitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={submitSpy}/>)
  const entry = {...expenses[1]}
  delete entry.id
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  expect(submitSpy).toHaveBeenCalledWith(entry)
})

test('should set new date on date changed', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set focus on date change component focus', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calenderFocused')).toEqual(focused)
})
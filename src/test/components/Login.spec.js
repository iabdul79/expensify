import React from 'react'
import {shallow} from 'enzyme'
import {Login} from '../../components/Login'

let wrapper, history

beforeEach(() => {
  history = { push: jest.fn() }
  wrapper = shallow(<Login history={history} />)
})

test('should render login component page', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should call login on login button clicked', () => {
  const login = jest.fn()
  wrapper = shallow(<Login login={login} />)
  wrapper.find('button').simulate('click')
  expect(login).toHaveBeenCalled()
})
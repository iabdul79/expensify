import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Header logOut={() => {}} />)
})

test('should render header correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should call logout on logout button clicked', () => {
  const logOut = jest.fn()
  wrapper = shallow(<Header logOut={logOut} />)
  wrapper.find('button').simulate('click')
  expect(logOut).toHaveBeenCalled()
})
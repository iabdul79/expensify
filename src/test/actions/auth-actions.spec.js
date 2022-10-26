import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {login, loginRx, logout, logoutRx} from '../../actions/auth-actions'
import { logOut, popupSignIn } from '../../firebase/firebase-auth'

jest.mock('../../firebase/firebase-auth')

const createMockStore = configureMockStore([thunk])

test('should call LOGIN action object', () => {
  const uid = 'sample_user_id_1'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should call LOGOUT action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})

test('should call popupSignIn function on loginRx action', () => {
  const store = createMockStore({})
  popupSignIn.mockResolvedValue()
  store.dispatch(loginRx())
  expect(popupSignIn).toHaveBeenCalled()
})

test('should call logOut function on logoutRx action', () => {
  const store = createMockStore({})
  logOut.mockResolvedValue()
  store.dispatch(logoutRx())
  expect(logOut).toHaveBeenCalled()
})
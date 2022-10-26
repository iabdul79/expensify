import authReducer from "../../reducers/auth-reducer"

test('should setup default expense state', () => {
  const state = authReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({})
})

test('should setup uid on login action', () => {
  const uid = 'sample_user_id_1'
  const state = authReducer(undefined, {type: 'LOGIN', uid})
  expect(state).toEqual({uid})
})

test('should remove uid on logout action', () => {
  const state = authReducer({uid: 'sample_user_id_1'}, {type: 'LOGOUT'})
  expect(state).toEqual({})
})
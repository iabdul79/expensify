import { logOut, popupSignIn } from "../firebase/firebase-auth"

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const loginRx = () => {
  return () => {
    popupSignIn()
  }
}

export const logoutRx = () => {
  return () => {
    logOut()
  }
}
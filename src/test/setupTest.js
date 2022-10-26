import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

jest.mock('firebase/app')
jest.mock('firebase/database')
jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    onAuthStateChanged: () => {},
  }),
  GoogleAuthProvider: function () {}
}))
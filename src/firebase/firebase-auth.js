import firebaseApp from './firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp)
const googleAuthProvider = new GoogleAuthProvider()

export const popupSignIn = () => {
  signInWithPopup(auth, googleAuthProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const logOut = () => {
  return signOut(auth)
} 

export const onAuthChange = (onLoggedIn, onLoggedOut) => {
  auth.onAuthStateChanged(user => {
    if (user)
      onLoggedIn(user)
    else
      onLoggedOut()
  })
}
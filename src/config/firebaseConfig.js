import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBYxjrXLqD4miBtIwdat7RHhdEdaT9qSEo",
  authDomain: "cart-776fd.firebaseapp.com",
  databaseURL: "https://cart-776fd-default-rtdb.firebaseio.com/"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

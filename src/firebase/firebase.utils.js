import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-xpkeHxieWBmixd54w2byxU7mLm8e9XA",
    authDomain: "testshop-f2c23.firebaseapp.com",
    databaseURL: "https://testshop-f2c23.firebaseio.com",
    projectId: "testshop-f2c23",
    storageBucket: "testshop-f2c23.appspot.com",
    messagingSenderId: "721914375858",
    appId: "1:721914375858:web:45e8d5a901641efb3763ab",
    measurementId: "G-YN5HF3FTL2"
  };

  export const createUserProfileDocument = async (userAuth, data) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...data,
        })
      } catch (err) {
        console.log('error creating user', err.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

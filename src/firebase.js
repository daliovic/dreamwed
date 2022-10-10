
import firebase from 'firebase/compat/app'

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_2DPtUD7wba2Vd7SS2pKwGIo4u6zgjs0",
  authDomain: "dreamwed-1.firebaseapp.com",
  projectId: "dreamwed-1",
  storageBucket: "dreamwed-1.appspot.com",
  messagingSenderId: "964565541944",
  appId: "1:964565541944:web:4b5a663e5a03236eb9b2cd",
  measurementId: "G-99C2ZVKJ1D"
}
const app = firebase.initializeApp(firebaseConfig);
//   const firestore = firebase.firestore()

export const auth = getAuth(app)

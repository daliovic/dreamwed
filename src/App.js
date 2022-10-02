import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/UI/Header';
import MainNav from './components/UI/MainNav'
import Footer from './components/UI/Footer';
import Budget from './components/Budget/Budget';
import { BrowserRouter as Router } from 'react-router-dom'


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import { useAuthState } from "react-firebase-hooks/auth"
import 'firebase/compat/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_2DPtUD7wba2Vd7SS2pKwGIo4u6zgjs0",
  authDomain: "dreamwed-1.firebaseapp.com",
  projectId: "dreamwed-1",
  storageBucket: "dreamwed-1.appspot.com",
  messagingSenderId: "964565541944",
  appId: "1:964565541944:web:e130ff2f595cd5adb9b2cd",
  measurementId: "G-BTT31BGCCL"
}
const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()

const auth = getAuth(app)


const loginHandler = (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Success");
    }).catch((error) => {
      console.log(error);
    });

}

const logoutHandler = (e) => {
  e.preventDefault()
  auth.signOut().then(function () {
    console.log("Success");
  }).catch(function (error) {
    console.log(error);
  });
}


function App() {

  const [user] = useAuthState(auth)
  const categoriesRef = firestore.collection('categories');
  const query = categoriesRef.orderBy('createdAt').limit(25)
  const categories = useCollectionData(query)
  console.log(categories[0]);
  return (
    <Router>
      <div className='pt-3 d-flex flex-column min-vh-100 justify-content-center container-fluid' style={{ fontFamily: "Lato" }}>
        <Header user={user} loginHandler={loginHandler} logoutHandler={logoutHandler} />
        {user === null && <h1 className='text-center'>Please login to continue</h1>}
        {user  && categories[0] && categories[0].length > 0 &&
          <>
            <MainNav />
            <Budget categories={categories[0]} />
          </>
        }
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

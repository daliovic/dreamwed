import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/UI/Header';
import MainNav from './components/UI/MainNav'
import Footer from './components/UI/Footer';
import Budget from './components/Budget/Budget';
import { Route, Routes } from 'react-router-dom'




import { UserAuth } from './context/AuthContext';
import { CollectionsCtx } from './context/CollectionsContext';
import { useEffect, useState } from 'react';


function App() {
  const { user, logOut } = UserAuth()

  const { categories, expenses } = CollectionsCtx();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!(!categories && !expenses)) {
      //console.log(categories.length);
      if (categories.length > 0 && expenses.length > 0) {
        setIsLoading(false)
      }
    }

  }, [categories, expenses, logOut]);

  return (


    <div className='pt-3 d-flex flex-column min-vh-100 justify-content-center container-fluid' style={{ fontFamily: "Lato" }}>
      <p onClick={() => {
        console.log(user)
      }}>
        Click</p>
      <Header />

      <MainNav />
      {user === null && <><h1 className='text-center my-auto'>Please login to continue</h1></>}
      {user !== null && isLoading && <p className='text-center'>Loading...</p>}

      {user && !isLoading &&
        <Routes>

          <Route exact path='/' element={<p>Choose a tool from the navigation bar</p>}></Route>
          <Route path='/budget/' element={
            <Budget categories={categories} expenses={expenses} />
          } />
          <Route path='/budget/:id' element={
            <Budget categories={categories} expenses={expenses} />
          } />

          <Route exact path='/checklist' element={<p className='text-center'>Checklist</p>}></Route>

          <Route exact path='/guestList' element={<p className='text-center'>Guest List</p>}></Route>
        </Routes>
      }

      <Footer></Footer>
    </div>

  );
}

export default App;

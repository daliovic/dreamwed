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
  const { user } = UserAuth()

  const { categories, expenses } = CollectionsCtx();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ((categories!==null && expenses!==null)) {
      //console.log(categories.length);
      if (categories.length > 0 && expenses.length > 0) {
        setIsLoading(false)
      }
    }

    console.log("-");
  }, [categories, expenses])

  return (


    <div className='pt-3 d-flex flex-column min-vh-100 justify-content-center container-fluid' style={{ fontFamily: "Lato" }}>
      <Header />

      <MainNav />
      {user === null && <><h1 className='text-center my-auto'>Please login to continue</h1></>}
      {user && isLoading && <p className='text-center'>Loading...</p>}
      {/* {console.log(user) } */}

      {user && !isLoading &&
        <Routes>

          <Route exact path='/' element={<p>Choose a tool from the navigation bar</p>}></Route>
          <Route path='/budget/' element={
            <Budget categories={categories.filter(item => item.uid === user.uid)} expenses={expenses} />
          } />
          <Route path='/budget/:id' element={
            <Budget categories={categories.filter(item => item.uid === user.uid)} expenses={expenses} />
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

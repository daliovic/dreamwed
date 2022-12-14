import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/UI/Header'
import MainNav from './components/UI/MainNav'
import Footer from './components/UI/Footer'
import Budget from './components/Budget/Budget'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { UserAuth } from './context/AuthContext'
import { CollectionsCtx } from './context/CollectionsContext'
import { useEffect, useState } from 'react'
import Todo from './components/Todo/Todo'
import Home from './components/Home/Home'
import Login from './components/Home/Login'
import Invitation from './components/Invitation/Invitation'
import { Slide, toast } from 'react-toastify'

function App() {
  const { user } = UserAuth()

  const { categories, expenses } = CollectionsCtx()

  const [isLoading, setIsLoading] = useState(true)
  const notifyLoginError = () =>
    toast.error('Please login to continue', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      theme: 'colored',
    })

  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/' && !user) {
      navigate('/')
      notifyLoginError()
      toast.clearWaitingQueue()
    }
    if (categories !== null && expenses !== null) {
      if (categories.length > 0 && expenses.length > 0) {
        setIsLoading(false)
      }
    }
  }, [categories, expenses, user, navigate, location.pathname])

  return (
    <div
      className='pt-3 d-flex flex-column min-vh-100 justify-content-center container-fluid'
      style={{ fontFamily: 'Lato' }}>
      <Header />
      <MainNav />
      {user === null && <Login />}
      {user && isLoading && <p className='text-center'>Loading...</p>}

      {user && !isLoading && (
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route
            path='/budget/'
            element={<Budget categories={categories.filter((item) => item.uid === user.uid)} expenses={expenses} />}
          />
          <Route
            path='/budget/:id'
            element={<Budget categories={categories.filter((item) => item.uid === user.uid)} expenses={expenses} />}
          />
          <Route exact path='/checklist' element={<Todo user={user} />}></Route>
          <Route exact path='/invitation' element={<Invitation />}></Route>
        </Routes>
      )}
      <Footer></Footer>
    </div>
  )
}

export default App

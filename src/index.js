import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthContextProvider } from './context/AuthContext'
import { CollectionsContextProvider } from './context/CollectionsContext'
import { BrowserRouter } from 'react-router-dom'
import { TodoContextProvider } from './context/TodoContext'
import { InvitationContextProvider } from './context/InvitationsContext'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthContextProvider>
    <TodoContextProvider>
      <CollectionsContextProvider>
        <InvitationContextProvider>
          <BrowserRouter>
            <ToastContainer limit={1} />
            <App />
          </BrowserRouter>
        </InvitationContextProvider>
      </CollectionsContextProvider>
    </TodoContextProvider>
  </AuthContextProvider>
)

reportWebVitals()

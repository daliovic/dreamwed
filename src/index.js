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

const root = ReactDOM.createRoot(document.getElementById('root'))
const providers = 
root.render(
  <AuthContextProvider>
    <TodoContextProvider>
      <CollectionsContextProvider>
        <InvitationContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </InvitationContextProvider>
      </CollectionsContextProvider>
    </TodoContextProvider>
  </AuthContextProvider>
)

reportWebVitals()

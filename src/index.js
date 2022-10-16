import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { CollectionsContextProvider } from './context/CollectionsContext';
import { BrowserRouter } from 'react-router-dom';
import { TodoContextProvider } from './context/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <TodoContextProvider>
      <CollectionsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollectionsContextProvider>
    </TodoContextProvider>
  </AuthContextProvider>
);

reportWebVitals();

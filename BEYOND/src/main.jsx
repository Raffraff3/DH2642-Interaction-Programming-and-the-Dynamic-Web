/**
 * main.jsx — the entry point: creates the React app, connects the Redux store and the router.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './model/store'
import { startApp } from './model/startup'
import App from './app/App'
import './styles/global.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/animations.css'

startApp(store) // listen for sign-in and load the users data

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

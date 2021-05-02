import React from 'react'
import Contacts from './components/Contacts'
import Header from './components/Header'
import { Provider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <Provider>
      <div>
        <Header branding="Contact Manager 1" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>

  )
}


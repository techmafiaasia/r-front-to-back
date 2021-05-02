import React from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <div>
      <Header branding="Contact Manager 1" />
      <div className="container">
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-55-5555" />
      </div>
    </div>
  )
}


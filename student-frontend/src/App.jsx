import { useState } from 'react'
import './App.css'
// import AppBar from './components/Appbar'
import Student from './components/Student'
import Navbar from './components/Navbar'

function App() {
  return (
    <div  className='App'>
      <Navbar/>
      {/* <Appbar/> */}
      <Student/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainContent from './components/maincontent/MainContent'
function App() {

  return (
    <>
      <div className='body'>
        <Navbar />
        <MainContent />
      </div>
    </>
  )
}

export default App

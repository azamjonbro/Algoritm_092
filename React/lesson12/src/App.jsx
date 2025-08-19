import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Header from "./components/Navbar/Navbar"
import Error from "./components/Errors/404"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App

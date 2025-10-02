import React from 'react'
import Counter from './features/counter/Counter'
import Cart from "./components/Card/Cart"
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <Cart/>
    </div>
  )
}

export default App

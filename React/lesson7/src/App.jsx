import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

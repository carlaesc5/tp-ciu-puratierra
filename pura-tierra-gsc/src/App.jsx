import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home'
import ProdCat from './Pages/ProdCatalog'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProdCat/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ProdDetalles from './Pages/ProdDetalles';

import Home from './Pages/Home'
import ProdCat from './Pages/ProdCatalog'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<ProdCat/>} />
        <Route path="/productos/:id" element={<ProdDetalles />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
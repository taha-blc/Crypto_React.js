import React from 'react'
import '../src/index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
const app = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default app
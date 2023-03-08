import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'


import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Cart.scss'
import './styles/MediaQuery.scss'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Toaster />
    </Router>
    
  )
}

export default App

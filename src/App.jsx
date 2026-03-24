import React from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Footer from './components/Footer'
import Download from './components/Download'

const App = () => {

  return (
    <>
      <Navbar />
      <Home />
      <ProductCard />
      <Products />
      <Download />
      <Footer />
    </>
  )
}

export default App
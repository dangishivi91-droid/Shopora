import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Cart from "./pages/Cart.jsx"


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>


    </div>
  )
}

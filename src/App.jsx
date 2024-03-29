import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import AppNav from './components/AppNav'
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout'
import ProductItem from './pages/ProductItem'

function App() {
  console.log("App component")
  return (<>
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />}/>
        <Route path="product" element={<Product />}/>
        <Route path="product/:id" element={<ProductItem/>}/>
        {/* <Route path="cart" element={<Cart />}/> */}
        <Route 
          path="app"
          element={
            <AppLayout/>
          }>
            <Route index element = {<Navigate replace to="Product"/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="product/:id" element={<ProductItem/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
        <Route path="*" element={<PageNotFound/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App





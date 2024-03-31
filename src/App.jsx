import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import AppNav from './components/AppNav'
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout'
import ProductItem from './pages/ProductItem'

const router= createBrowserRouter(
  [{
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children:[
      {
        path: '/',
        element: <Navigate replace to="product"/>,
        errorElement: <PageNotFound />,
      },
      {
        path: 'product',
        element: <Product/>,
        errorElement: <PageNotFound />,
      },
      {
        path: 'product/:id',
        element: <ProductItem/>,
        errorElement: <PageNotFound />,
      },
      {
        path: 'cart',
        element: <Cart/>,
        errorElement: <PageNotFound />,
      }
    ]
  }
]
)

function App() {
  return (<div>
  <RouterProvider router={router}/>
    {/* <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />}/>
        <Route path="product" element={<Product />}/>
        <Route path="product/:id" element={<ProductItem/>}/>
        <Route path="cart" element={<Cart />}/>
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
    </BrowserRouter> */}
    
    </div>
  )
}

export default App





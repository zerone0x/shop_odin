import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
import AppNav from '../components/AppNav';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';


function AppLayout() {
    const cart = useSelector(state => state.cart.value)
    console.log(cart);
    let total = cart.reduce((acc, item) => {
        return acc + item?.quantity
    }, 0)
    let payment = cart.reduce((acc, item) => {
        return acc + item?.price * item?.quantity
    }, 0)

  return (
    <div>
      <header className='text-center text-cyan-400'>Shop</header>
        {/* <AppNav /> */}
        {/* <h1>Shop App main page</h1> */}
        <p>Total Cart: {total}</p>
        {/* <p>Welcome to the Shop App main page</p> */}
        <Outlet context={{payment}}/>
        

    </div>
  );
}

export default AppLayout;
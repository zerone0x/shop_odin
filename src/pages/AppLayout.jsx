import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
import AppNav from '../components/AppNav';
import { configureStore } from '@reduxjs/toolkit';


function cartReducer(state, action){
    switch(action.type){
        case 'add':
            return [...state, action.item]
        case 'remove':
            return state.filter(item => item.id !== action.id)
        case 'set':
            return action.cart
        case 'setAmount':
            return state.map(item => {
                if(item.id === action.id){
                    return {...item, quantity: action.quantity}
                }
                return item
            })
        default:
            return state
    }
}

function AppLayout() {
    const [cart, dispatch] = useReducer(cartReducer, [])

    let total = cart.reduce((acc, item) => {
        return acc + item?.quantity
    }, 0)
    let payment = cart.reduce((acc, item) => {
        return acc + item?.price * item?.quantity
    }, 0)


  return (
    <div>
        <AppNav />
        <h1>Shop App main page</h1>
        <p>Total Cart: {total}</p>
        <p>Welcome to the Shop App main page</p>
        <Outlet context={{dispatch, cart, payment}}/>
        

    </div>
  );
}

export default AppLayout;
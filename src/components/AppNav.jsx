import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';

function AppNav() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Homepage</NavLink>
            </li>
            {/* <li>
                <NavLink to="/product">Product</NavLink>
            </li> */}
            <li>
                <NavLink to="/cart">Cart</NavLink>
            </li>
            {/* <li>
                <NavLink to="/app">App</NavLink>
            </li> */}
        </ul>
    </nav>
  );
}

export default AppNav;
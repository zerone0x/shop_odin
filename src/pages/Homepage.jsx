import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import AppNav from '../components/AppNav';


function Homepage() {
   
  return (
    <main>
        <AppNav />
<h2>Shop</h2>
<Link to="/app/product">Start to shop</Link>

    </main>
    );
}

export default Homepage;
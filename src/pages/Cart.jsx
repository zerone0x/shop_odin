import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useOutletContext } from 'react-router-dom';
import AppNav from '../components/AppNav';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { remove, set, setAmount } from '../features/cartSlice';

function Cart() {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();
    const { payment} = useOutletContext();
    function removeItem(id){
        dispatch(remove(id))
    }
    function handleSetAmount(quantity, id){
        const cartQuantity = Number(quantity);
        dispatch(setAmount({id, cartQuantity}))
    }
  return (
    <main>
        <AppNav />
        <h2>Cart</h2>
        {(cart.length) &&<><table>
        <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {cart.map((item)=><tr key={item.id}>
                    <th>{item.name} <img width="100" src={item.image} /> </th>
                    <th>{item.price}</th>
                    <th>
                        <input type="number" value={item.quantity} onChange={(e)=>{handleSetAmount(e.target.value, item.id)}}  />
                    </th>
                    <th>{item.price*item.quantity}</th>
                    <Button onClick={()=>{removeItem(item.id)}}>Remove</Button>
                </tr>)}
            </thead>

            </table>
            <Button onClick={()=>dispatch(set([]))}>Clear Cart</Button>
            <p>Total: {payment.toFixed(2)}</p>
            <Button>Checkout</Button></>}
            
            {!cart.length && <p>Cart is empty😅</p>}
    </main>
  );
}

export default Cart;
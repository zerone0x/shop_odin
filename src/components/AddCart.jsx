import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';

import { add, set, selectCart } from '../features/cartSlice';

function  AddCart({ title, price, id, image}) {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    function handleAdd(){
        setAmount((prev)=>Number(prev)+1);
    }
    function handleSub(){
        setAmount((prev)=>Number(prev)-1);
    }
    function handleclick( title, price, id, quantity, image){
        if (quantity === 0){
            return;
        }
        const itemIndex = cart.findIndex((item)=>item.id === id);
        if (itemIndex !== -1){
            const newCart = [...cart];
            newCart[itemIndex]={...newCart[itemIndex], quantity: quantity};
            dispatch(set(newCart));
            console.log(cart);
            return;
        }
        
        dispatch(add({ name: title, price: price, id: id, quantity: quantity, image: image}));
    }
    useEffect(()=>{
        if (amount == 0){
            setAmount(cart.find((item)=>item.id === id)?.quantity || 0);
        }
    },[cart])
  return (
    <div>
            <Button onClick={handleSub}>-</Button>
            <input type="number" min="1"value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
            <Button onClick={handleAdd} >+</Button>
            <Button onClick={()=>handleclick( title, price, id, Number(amount), image)}>Add to Cart</Button>
            <p>payment: ${(amount*price).toFixed(2)}</p>
        </div>
  );
}

export default  AddCart;
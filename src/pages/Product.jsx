import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import AppNav from '../components/AppNav';
import AddCart from '../components/AddCart';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { fetchshops } from '../features/shopSlice';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../features/cartSlice';

function Product() {
    const navigate = useNavigate();
    const error = useSelector(state => state.shop.error);
    // const [products, setProducts] = useLocalStorageState([], 'products');
    const {payment} = useOutletContext();
    let products = [];
    const shop = useSelector(state => state.shop.value);
    const handleclick =(id)=>{
        navigate(`/app/product/${id}`);
    }
    const dispatch = useDispatch();
    const shopStatus = useSelector(state => state.shop.status);

    useEffect(() => {
        if (shopStatus === "idle") {
            dispatch(fetchshops());
        }
    }, [shopStatus, dispatch]);


    if(shopStatus === "loading"){
        return <div>Loading...</div>
    }else if(shopStatus === "failed"){
        return <div>Failed to load data {error}</div>
    }else if(shopStatus === "succeeded"){
        products = shop;
    }


    return (
        <main>
            <AppNav />
    <h2>Product</h2>
  
    <ul>
        { products.map((product) => (
            <li key={product.id} >
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <img width="100" src={product.image} alt={product.title} onClick={()=>handleclick(product.id)}/>
                <div>

            <AddCart  title={product.title} price={product.price} id={product.id} image={product.image} />
        </div>
            </li>
        ))}
    </ul>
        </main>
        );
}

export default Product;
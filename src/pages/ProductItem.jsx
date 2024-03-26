import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams,useOutletContext } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import AddCart from '../components/AddCart';

function ProductItem() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const {dispatch, cart, payment} = useOutletContext();

   
    useEffect(() => {
        async function fetchProduct() {
            try{
                setLoading(true);
                const response = await fetch('https://fakestoreapi.com/products/'+id);
                const data = await response.json();
                setProduct(data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
            
        }
        fetchProduct();

    },[setProduct]
    )
    const {title, description, price, image} = product;
  return (
    <main>
        <h2>Product Detail</h2>
        {loading && <p>Loading...</p>}
        {error && <p>error</p>}
        <h3>{ title}</h3>
        <p>{ description}</p>
        <p>{ price}</p>
        <img width="100" src={ image} alt={ title} />
        <AddCart  cart={cart} dispatch={dispatch} title={title} price={price} id={id} image={image} />
        <BackButton />
    </main>
  );
}

export default ProductItem;
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import AppNav from '../components/AppNav';
import AddCart from '../components/AddCart';
import useLocalStorageState from '../hooks/useLocalStorageState';


function Product() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useLocalStorageState([], 'products');
    const {payment} = useOutletContext();
    const handleclick =(id)=>{
        navigate(`/app/product/${id}`);
    }

    useEffect(() => {
        async function fetchProduct() {
            try{
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setProducts(data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
            
        }
        fetchProduct();

    },[setProducts]
    )
    

    return (
        <main>
            <AppNav />
    <h2>Product</h2>
    {loading && <p>Loading...</p>}
    {error && <p>Error</p>}
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
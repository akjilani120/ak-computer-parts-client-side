import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products , setProducts]= useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')       
    .then(res => res.json())
    .then(data => setProducts(data))
    },[products])
   
    return (
        <div className='px-12' >
           
           <div>
               <h1 className='text-secondary text-5xl font-bold my-6'>Our Products service</h1>
           </div>
            
         <div className='grid  lg:grid-cols-2 gap-4' >
            {
                products.map(product => <Product product={product} key={product._id}></Product>)
            }
         </div>
        </div>
    );
};

export default Products;
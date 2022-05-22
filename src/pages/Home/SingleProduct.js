import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const {id} =useParams()
    const [product , setProduct] = useState([])
    return (
        <div>
            
        </div>
    );
};

export default SingleProduct;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate()
    const { name, description, img, minimunQuantity, maximumQuantity, perUnitPrice, _id } = product
    const handleId =(id) =>{
        navigate(`/singleProduct/${id}`)
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl text-left p-10 lg:p-0 border border-info  mb-10">
            <figure className='lg:w-2/5'><img  src={img} alt="Movie"/></figure>
            <div className="card-body lg:w-3/5 ">
                <h2 className=""><b>Name :</b> {name}</h2>
                <p><b>Description : </b> {description}</p>
                <p><b>Minimun Quntity : </b>{minimunQuantity}</p>
                <p><b>Maximum Quntity : </b>{maximumQuantity}</p>
                <p> <b>Price :</b> $ {perUnitPrice}</p>
                <div className="card-actions justify-start">
                    <button onClick={() =>handleId(_id)} className="btn btn-secondary text-white">Buy NOw</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
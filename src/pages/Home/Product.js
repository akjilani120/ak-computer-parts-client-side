import React from 'react';

const Product = ({ product }) => {
    const { name, description, img, minimunQuantity, maximumQuantity, perUnitPrice } = product
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl text-left p-10 lg:p-0">
            <figure className='lg:w-2/5'><img  src={img} alt="Movie"/></figure>
            <div class="card-body lg:w-3/5 ">
                <h2 class=""><b>Name :</b> {name}</h2>
                <p><b>Description : </b> {description}</p>
                <p><b>Minimun Quntity : </b>{minimunQuantity}</p>
                <p><b>Maximum Quntity : </b>{maximumQuantity}</p>
                <p> <b>Price :</b> $ {perUnitPrice}</p>
                <div class="card-actions justify-start">
                    <button class="btn btn-secondary text-white">Buy NOw</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
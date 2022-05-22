import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const SingleProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)  
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { img, name, description, minimunQuantity, maximumQuantity, perUnitPrice } = product
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const onSubmit = data =>{
       const Purchase ={
           
       }
    };
    return (
        <div >
            <h1 className='text-5xl text-secondary bg-info text-white py-4'>About : {name}</h1>
            <div class="hero min-h-3/5  text-left">

                <div class="hero-content flex-col lg:flex-row ">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className='text-3xl py-'><b> <span className='text-primary'>Name : </span> </b> {name}</h2>
                        <p className='text-2xl py-'><b> <span className='text-primary'>Description : </span> </b> {description}</p>
                        <p className='text-2xl py-'><b> <span className='text-primary'>Minimun Quntity : </span> </b>{minimunQuantity}</p>
                        <p className='text-2xl py-'><b> <span className='text-primary'>Maximum Quntity : </span></b>{maximumQuantity}</p>
                        <p className='text-2xl py-2' > <b> <span className='text-primary'>Price : </span> </b> $ {perUnitPrice}</p>

                        <label for="parshes-modal" class="btn btn-secondary text-white modal-button">Purchase</label>
                        <input type="checkbox" id="parshes-modal" class="modal-toggle" />
                        <div class="modal ">
                            <div class="modal-box bg-info">
                            <label for="parshes-modal" class="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                                 <h3 className='text-center text-secondary my-2 text-2xl font-bold'>ORDAR NOW</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <input type='text' class="input input-bordered input-info w-full max-w-xs my-2" value={user.displayName} {...register("name")} />
                                <input type='email' class="input input-bordered input-info w-full max-w-xs my-2" value={user.email} {...register("email")} />
                                   
                                    <input class="input input-bordered input-info w-full max-w-xs my-2" type="text"  {...register("number", {min:minimunQuantity , max:maximumQuantity} )} placeholder="Add quantiry" />                                   
                                    <input class="input input-bordered input-info w-full max-w-xs my-2" type="text" {...register("phone") } placeholder="Phone number"/>
                                    <div class="modal-action">
                                    <input for="parshes-modal"  className='btn btn-secondary text-white'  type='submit' value="Submit" />
                                </div>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleProduct;
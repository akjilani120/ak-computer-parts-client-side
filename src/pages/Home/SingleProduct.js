import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const SingleProduct = () => {
    const [products, setProducts] = useState(true)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { img, name, description, minimunQuantity, maximumQuantity, perUnitPrice, _id } = product

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const onSubmit = data => {
        const priceField = parseInt(perUnitPrice) * data.quantity;

        const purchase = {
            userName: data.name,
            userEmail: data.email,
            quantity: data.quantity,
            productName: name,
            phone: data.phone,
            price: priceField,
            PurshId: _id
        }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    console.log(data)
                    toast.success("Your purshes successfully ")
                }else{
                    toast.error("Your purshes not successfully")
                }              
               
               

            })
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
                                    <label className='label'>
                                        <input class="input input-bordered input-info w-full max-w-xs my-2" type="text"  {...register("quantity", { min: minimunQuantity, max: maximumQuantity })} placeholder="Add quantiry" />
                                        <label class="label ">
                                           
                                            
                                        </label>
                                    </label>

                                    <input class="input input-bordered input-info w-full max-w-xs my-2" type="text" {...register("phone")} placeholder="Phone number" />
                                    <p className=''>
                                        <span className='text-red-500 font-bold'>{errors.quantity?.type === 'min' && "Minimum quaity so low to our products"}</span>
                                        <span className='text-red-500 font-bold'>{errors.quantity?.type === 'max' && "Maximum quaity hight to our products"}</span>
                                    </p>
                                    <input for="parshes-modal" className='btn btn-secondary px-10 text-white' type='submit' value="Submit" />
                                   
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
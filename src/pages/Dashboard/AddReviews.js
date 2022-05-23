import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReviews.css'
const AddReviews = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event =>{
        event.preventDefault()
        const  reviewsPerson =user.displayName
        const productName= event.target.product.value
        const reviewsPoint= event.target.reviews.value
        const commite= event.target.commite.value
        const reviews ={
            person : reviewsPerson,
            product: productName,
             ratingPoing :reviewsPoint,
             Comment: commite,
        }
     fetch('http://localhost:5000/reviews', {
         method:"POST",
         headers:{
             'content-type' : 'application/json'
         },
         body : JSON.stringify(reviews)
     })  
     .then(res => res.json())
     .then(data => {
         toast("Your reviews is success.Thanks for reviews")        
     })
    }
    return (
        <div className=''>
           
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center  lg:text-left">
                    <h1 className='text-5xl text-info '>Customers  Reviews</h1>
                        <p class="py-6">One of your comments is very much to us. We need to know what our parts are like. If it feels good then make good comments and give more rating points</p>
                    </div>
                    <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={ handleSubmit}> 
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Add Your Product Name</span>
                                    </label>
                                    <input type="text" name='product' placeholder="Prduct Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Add Rating Point number</span>
                                    </label>
                                    <input type="text" name='reviews' placeholder="Add Point" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Add Commite </span>
                                    </label>
                                    <textarea name='commite' className='border rounder p-5' rows='5' cols="10"  placeholder="Add Your commite"></textarea>

                                </div>
                                <div class=" mt-6">
                                    <input value='ADD Reviews' type="submit" class="btn btn-primary"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;
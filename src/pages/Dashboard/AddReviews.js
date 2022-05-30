import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReviews.css'
const AddReviews = () => {
    let reviewsError;
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
     fetch('https://sleepy-plains-20248.herokuapp.com/reviews', {
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
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center  lg:text-left">
                    <h1 className='text-5xl text-info font-bold '>Customers  Reviews</h1>
                        <p className="py-6">One of your comments is very much to us. We need to know what our parts are like. If it feels good then make good comments and give more rating points</p>
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={ handleSubmit}> 
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Your Product Name</span>
                                    </label>
                                    <input type="text" name='product' placeholder="Prduct Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Rating Point number(1 - 5)</span>
                                    </label>
                                    <input type="text" name='reviews' placeholder="Add Point" min="1" max="5"  className="input input-bordered" />
                                    <p className='text-red-500'>{reviewsError}</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Commite </span>
                                    </label>
                                    <textarea name='commite' className='border rounder p-5' rows='5' cols="10"  placeholder="Add Your commite"></textarea>

                                </div>
                                <div className=" mt-6">
                                    <input value='ADD Reviews' type="submit" className="btn btn-primary"></input>
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
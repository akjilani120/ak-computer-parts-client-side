import React from 'react';
import './AddReviews.css'
const AddReviews = () => {
    const handleSubmit =event =>{
        event.preventDefault()
        // const productName= event.target.product.value
        // const reviewsPoint= event.target.reviews.value
        // const commite= event.target.commite.value
        // console.log("Add reviews" , productName, reviewsPoint, commite)
    }
    return (
        <div className=''>
            <h1 className='text-5xl text-secondary '>Customers  Reviews</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center hidden  lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                        <span class="label-text">Add Point number</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Add Point" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Add Commite </span>
                                    </label>
                                    <textarea name='commite' className='border rounder p-5' rows='5' cols="10"  placeholder="Add Your commite"></textarea>

                                </div>
                                <div class="form-control mt-6">
                                    <input value={'ADD Reviews'} type="submit" class="btn btn-primary"></input>
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
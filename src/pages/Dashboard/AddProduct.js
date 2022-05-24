import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const minimum = event.target.minimum.value;
        const maximum = event.target.maximum.value;
        const price = event.target.price.value;
        const img = event.target.image.value;
      
        const addProduct = {
            name: name,
            description: description,
            minimumQuantity: minimum,
            maximumQuantity: maximum,
            price : price,
            img: img
        }
  
    fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addProduct)
    })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast(" Successfully !!! your product added")
            }
           
        })
    }
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <div class="card w-9/12 bg-base-100 shadow-xl bg-info ">
                    <h1 className='text-secondary font-bold text-2xl mt-5'>Add Product</h1>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Product Name" class="input input-bordered"  required/>
                            </div>
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Description" class="input input-bordered"  required/>
                            </div>
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add Maximum quaity</span>
                                </label>
                                <input type="text" name='maximum' placeholder="Maximum Quantity" class="input input-bordered" required />
                            </div>
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add Minimum quaity</span>
                                </label>
                                <input type="text" name='minimum' placeholder="Minimum Quantity" class="input input-bordered"  required/>
                            </div>
                           
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add Per Unite  price</span>
                                </label>
                                <input type="text" name='price' placeholder="Per Unite Price" class="input input-bordered"  required/>
                            </div>
                            <div class="form-control mb-5">
                                <label class="label">
                                    <span class="label-text text-white text-white">Add your Image Link</span>
                                </label>
                                <input type="text" name='image' placeholder="Image Link" class="input input-bordered" required />
                            </div>
                            <div class=" mt-6">
                                <input value='ADD' type="submit" class="btn btn-secondary text-white px-12 py-4"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
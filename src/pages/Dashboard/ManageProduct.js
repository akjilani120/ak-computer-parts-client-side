import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';
const ManageProduct = () => {
    const [id , setId] = useState('')
    const { data: products, isLoading, refetch } = useQuery("products", () =>
        fetch('http://localhost:5000/products')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
              if(data.deletedCount === 1){
                refetch()
              }
              
            })
      
    }
    return (
        <div className='bg-base-200  px-10 py-5 '>
            <h1 className='text-5xl font-bold text-info  underline decoration-info'>My Purshes Product </h1>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead >
                        <tr className=' border-2 border-info border  text-info '>
                            <th>No</th>
                            <th>Product Image</th>                           
                            <th>Product Name</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          products?.map((product, index) => <ManageProductRow refetch={refetch} handleDelete={handleDelete}  key={product._id} product={product} index={index} setId={setId}></ManageProductRow>)
                        }
                    </tbody>
                    
                </table>
                <input type="checkbox" id="delete-btn" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box bg-info text-white">
                        <h3 className="font-bold text-lg w-50">Are you sure Delete your product ? </h3>
                        <label for="delete-btn" className="btn btn-secondary  text-white btn-sm btn-circle absolute right-2 top-2">✕</label>                        
                        <div className="modal-action">
                            <label for="delete-btn" onClick={() =>handleDelete(id)} className="btn btn-error text-white font-bold">Confirm Delete</label>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ManageProduct;
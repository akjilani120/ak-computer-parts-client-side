import React from 'react';
import  { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import AllOrdersROw from './AllOrdersROw';
const ManageAllOrdars = () => {
    const [orders , setOrders] = useState([])

 
   
    useEffect(() =>{      
           
        //   fetch('http://localhost:5000/orders' , {
        //         method: "GET",
        //         headers: {
        //             "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        //       },
        //  })
        //   .then(res => res.json)
        //   .then(data  => console.log(data))
            fetch('http://localhost:5000/orders', {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    alert("Fobidden Access. Please Login then come back this page")
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                }
                return res.json()
            }
            )
            .then( data => {               
                setOrders(data)
            })
        
       
    } , [])

    return (
        <div className='bg-base-200  px-10 py-5 '>
            <h1 className='text-5xl font-bold text-info  underline decoration-info'>Manage All orders </h1>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">                   
                    <thead >
                        <tr className=' border-2 border-info border  text-info '>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Name </th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>                       
                      {
                      orders?.map((order , index) => <AllOrdersROw key={order._id} order = {order} index={index}></AllOrdersROw> )
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrdars;
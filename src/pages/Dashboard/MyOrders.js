import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'
import Myorder from './Myorder';
import  { useEffect, useState } from 'react';
const MyOrders = () => {
    const [orders , setOrders] = useState()
    const [user] = useAuthState(auth)   

    useEffect(() =>{

        if(user){
            const email = user.email
            fetch(`http://localhost:5000/orders?email=${email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
            })
            .then(res  => res.json())
            .then( data => {
                
                setOrders(data)
            })
        }
       
    } , [user])

    
    return (
        <div className='bg-base-200  px-10 py-5 '>
            <h1 className='text-5xl font-bold text-info  underline decoration-info'>My Purshes Product </h1>
            <div class="overflow-x-auto mt-8">
                <table class="table w-full">                   
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
                      orders?.map((order , index) => <Myorder key={order._id} order = {order} index={index}></Myorder> )
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
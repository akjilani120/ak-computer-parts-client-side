import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

import Myorder from './Myorder';
import  { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
const MyOrders = () => {
    const [orders , setOrders] = useState()
    const [user] = useAuthState(auth)   

    useEffect(() =>{

        if(user){
            const email = user.email
            fetch(`https://sleepy-plains-20248.herokuapp.com/orders?email=${email}`, {
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
        }
       
    } , [user])

    
    return (
        <div className='bg-base-200  px-10 py-5 '>
            <h1 className='text-5xl font-bold text-info  underline decoration-info'>My Purshes Product </h1>
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
                      orders?.map((order , index) => <Myorder key={order._id} order = {order} index={index}></Myorder> )
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
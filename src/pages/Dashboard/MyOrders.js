import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const {data , isLoading} = useQuery("order" , () => fetch(`http://localhost:5000/orders?email=${email}` ,{
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
    })
    .then( res => res.json())
    )
    if( isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-info'>MY  Purshes Product {console.log(" I am my favourite orders" , data)} </h1>
        </div>
    );
};

export default MyOrders;
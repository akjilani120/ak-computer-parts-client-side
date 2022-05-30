import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1s3BBYtY7LA3umHtbhlOOjy24ztEYhVE6T9fYxHUrfRToeoghTrYQ7I7IgpHq9tr0dFVTy1bpGtFUBjDxPXdnF00j1CYjeD2');
const Payment = () => {
    const { payId } = useParams()
    const url = `https://sleepy-plains-20248.herokuapp.com/orders/${payId}`
    const { data, isLoading } = useQuery(["id", payId], () => fetch(url, {
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

    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center bg-info text-white">
                        <p className='font-bold text-3xl'>Your Purshes</p>
                        <h2 className="text-secondary font-bold text-2xl">Hellow {data.userName}</h2>
                        <p className='font-bold text-xl'>Pay for {data.productName}</p>
                        <p className='font-bold'>Product Price : {data.price}</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-7">
                    <div className="card-body text-center ">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm  data ={data}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
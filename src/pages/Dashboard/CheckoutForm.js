
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState , useEffect} from 'react';

const CheckoutForm = ({data}) => {
    const {price , userName , userEmail , productName} =  data
   
    const stripe = useStripe();
    const elements = useElements();
    const [payError , setPayError] = useState('')
    const [success , setSuccess] = useState('')
    const [transId , setTransId] = useState('')
    const [clientSecret , setClientSecret] = useState("")
    useEffect(() =>{
        fetch("http://localhost:5000/create-payment-intent" ,{
            method:"POST", 
            headers: {
                "content-type" :"application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body : JSON.stringify({price})
        })
        .then(res => res.json())
        .then( data => {
           if(data?.clientSecret){
               setClientSecret(data.clientSecret)
           }
        })
    } ,[price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card", 
            card,
        })
       
            setPayError(error?.message || "")
            setSuccess("")
            const {paymentIntent, error: intError} = await stripe.confirmCardPayment(
                clientSecret,
                
                    {
                        payment_method: {
                          card: card,
                          billing_details: {
                            name: userName,
                            email: userEmail
                          },
                        },
                      },
                
              );

            if(intError){
                setPayError(intError?.message)
            }else{
                setPayError("")                
                setSuccess("Congratulation !! Your payment is success")
                
            }
            setTransId(paymentIntent)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success text-left my-5 px-10 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 font-bold'>{payError}</p>
            <p className='text-green-500 font-bold'>{success}</p>
           { success && <p className='text-secondary font-bold'>Your Transmission Id:  {transId}</p>}
        </div>
    );
};

export default CheckoutForm;
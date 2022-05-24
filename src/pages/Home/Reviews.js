import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/reviews", )
            .then(res => res.json())
            .then(data => {   
                console.log(data)            
                setReviews(data)})
    }, [])
    return (
        <div className='my-10 px-12'>
             <h1 className='text-5xl text-secondary  my-5'>Customar Reviews</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map( review =>  <div class="card border border-info   bg-base-100 shadow-xl" key={review._id}>
                        <h1 className='text-3xl font-bold text-info pt-5'>Review</h1>
                    <div class="card-body text-left">
                        <p className=''><b> <span className='text-info text-1xl'> Review Rating Point :</span></b> <span>{review.ratingPoing} </span></p>
                        <h2 className=''><b> <span className='text-info text-1xl'> Review Person Name : </span></b> <span>{review.person} </span></h2>
                        <h2 className=''><b> <span className='text-info text-1xl'> Review Product Name :</span> </b><span>{review.product} </span></h2>
                        <h2 className='text-justify bg-accent p-5'><b> <span className='text-secondary text-1xl'> Review Product Comment : </span></b> <span style={{opacity:".9"}}>{review.Comment} </span></h2>
                        
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;
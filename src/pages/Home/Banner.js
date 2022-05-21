import React from 'react';
import banner from '../img/banner1.jpg'
import './Banner.css'
const Banner = () => {
    
    return (
        <div className='banner-img' style={{ 
            backgroundImage: `url(${banner})` 
          }}>
           <div className=' lg:w-2/4'>
             <h1 className='text-secondary text-5xl font-bold my-3'>Parts Needed for make Best Computer</h1>
             <p className='text-white mb-5'>We have best computer parts.If Anytime any product need just contact us.You get best make computer.Your pc will the best pc </p>
             <button className='btn btn-secondary text-white'>Show more</button>
           </div>
        </div>
    );
};

export default Banner;
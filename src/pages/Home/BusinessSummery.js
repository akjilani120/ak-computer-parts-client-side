import React from 'react';
import bgimg from '../img/bussinessbg.jpg'
import './BusinessSummery.css'

const BusinessSummery = () => {
    return (
        <div className='banner-img business-bg my-6' style={{
            backgroundImage: `url(${bgimg})`
        }} >
              
            <div className='business-overflow '>
            <h1 className='text-seocondary  lg:text-4xl text-2xl text-center mt-2 text-secondary'>Business Summery</h1>
                <div className='grid  lg:grid-cols-3 gap-4  px-12 flex justify-between lg:mt-10   text-left h-full '>
                    <div className="ml-5" >

                        <p className='lg:text-4xl text-2xl text-secondary lg:mb-5'>800+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 h-10 lg:w-20 w-10 text-white mb-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>

                        <h2 className='text-secondary text-2xl'>Product</h2>
                    </div>
                    <div  className="ml-5">

                        <p className='lg:text-4xl text-2xl text-secondary lg:mb-5'>12000+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 h-10 lg:w-20 w-10 text-white mb-5 " viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <h2 className='text-secondary text-2xl'>Client</h2>
                    </div>
                    <div className="ml-5">

                        <p className='lg:text-4xl text-2xl text-secondary lg:mb-5'>20+</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-20 h-10 lg:w-20 w-10 text-white mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>

                        <h2 className='text-secondary text-2xl'>Country Service</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;
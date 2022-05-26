import React from 'react';
import bgimg from '../img/bussinessbg.jpg'
import './BusinessSummery.css'
import CountUp from 'react-countup';
const BusinessSummery = () => {
    return (
        <div className='countUp mt-15' style={{
            backgroundImage: `url(${bgimg})`
        }}>

            <div className='count-overflow '>
                <h1 className='count-title font-bold pt-5 text-4xl text-secondary'>Our Business  Statistics</h1>
                <div className='count-part'>
                    <div className="count-number text-left">                        
                        <h1 className='text-5xl'><CountUp  end={5847} delay={2} /></h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 block ml-9 my-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h4>Current <span className='count-spa'>Product</span></h4>
                    </div>
                    <div className="count-number text-left">
                        <h1 className='text-5xl'> <CountUp  end={87450} delay={2} /></h1> 
                        <h2><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  block ml-9 my-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg> </h2>
                        <h4>Happy <span className='count-spa'>Client</span></h4>
                    </div>
                    <div className="count-number text-left">
                        <h1 className='text-5xl'><CountUp  end={220} delay={2} /></h1>
                        <h1><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 block ml-9 my-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg></h1>
                        <h4>Country<span className='count-spa'>Service</span></h4>
                    </div>
                    <div className="count-number text-left">
                        <h1 className='text-5xl'><CountUp  end={98574} delay={2} /></h1>
                        <h1 className='text-center '><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 block ml-9 my-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg></h1>
                        <h4>Device <span className='count-spa'>Service</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;
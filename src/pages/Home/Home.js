import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Products from './Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;
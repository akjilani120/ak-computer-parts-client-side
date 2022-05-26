import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Features from './Features';
import MoreProducts from './MoreProducts';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <BusinessSummery></BusinessSummery>
           <Reviews></Reviews>
           <Features></Features>
           <MoreProducts></MoreProducts>
        </div>
    );
};

export default Home;
import React from 'react';
import banner1 from '../img/banner-11.jpg'
import banner2 from '../img/banner-2.jpg'
import banner3 from '../img/banner-3.jpg'
import banner4 from '../img/4.jpg'
import './Banner.css'
const Banner = () => {
    
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" /> / 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

          <a href="#slide4" className="btn btn-circle">❮</a> 
          <button className='btn btn-secondary text-white px-12 mt-5'> Show more</button>
          <a href="#slide2" className="btn btn-circle">❯</a>
         
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" /> / 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <button className='btn btn-secondary text-white px-12 mt-5'> Show more</button>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" /> / 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">          
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <button className='btn btn-secondary text-white px-12 mt-5'> Show more</button>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" /> / 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <button className='btn btn-secondary text-white px-12 mt-5'> Show more</button>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Banner;
import React from 'react';
import mapImage from '../img/map.jpg'
import './MoreProduct.css'

const MoreProducts = () => {
    return (
       <div className=' bg-info'>
            <h1 class="text-5xl font-bold text-white pt-10">Contact Us</h1>
            <div class="hero ">
            <div class="hero-content flex-col lg:flex-row-reverse text-white">
                <img  src={mapImage} class="max-w-sm rounded-lg shadow-2xl w-screen h-96 ml-10" />
                <div>
                   
                    <div class="form-control  ">
                        <label class="label">
                            <span class="label-text text-white">Your Name</span>
                        </label>
                        <label class="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="your name" class="input input-bordered w-96" />
                        </label>
                    </div>
                    <div class="form-control mt-5">
                        <label class="label">
                            <span class="label-text text-white">Your Email</span>
                        </label>
                        <label class="input-group">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" class="input input-bordered  w-96" />
                        </label>
                    </div>
                    <div class="form-control mt-5">
                        <label class="label">
                            <span class="label-text text-white">Message</span>
                        </label>
                        <label class="input-group">
                            <span>Text</span>
                            <textarea  className=' w-96 px-5 pt-5' placeholder='message' cols='25' rows ="10"></textarea>
                        </label>
                    </div>
                   <p className="text-left my-5"> <button class="btn btn-secondary text-white">SUBMIT NOW</button></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default MoreProducts;
import React from 'react';
import mapImage from '../img/map.jpg'
import './MoreProduct.css'

const MoreProducts = () => {
    return (
       <div className=' bg-info'>
            <h1 className="text-5xl font-bold text-white pt-10">Contact Us</h1>
            <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse text-white">
                <img  src={mapImage} className="max-w-sm rounded-lg shadow-2xl w-screen h-96 ml-10" />
                <div>
                   
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text text-white">Your Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="your name" className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-white">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered  w-96" />
                        </label>
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <label className="input-group">
                            <span>Text</span>
                            <textarea  className=' w-96 px-5 pt-5' placeholder='message' cols='25' rows ="10"></textarea>
                        </label>
                    </div>
                   <p className="text-left my-5"> <button className="btn btn-secondary text-white">SUBMIT NOW</button></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default MoreProducts;
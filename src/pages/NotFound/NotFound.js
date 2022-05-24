import React from 'react';
import img from '../img/notfound.jpg'
const NotFound = () => {
    return (
        <div>
            <img  style={{height:"500px"}} className='w-full' src={img} alt="Not Found image" />
        </div>
    );
};

export default NotFound;
import React from 'react';

const Features = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
           
            <div className="hero-content flex-col  lg:flex-row">
                <div className="h-96 w-2/3 carousel carousel-vertical rounded-box ">
                   
                    <div className="carousel-item h-full">
                        <img className='w-96' src="https://c1.neweggimages.com/ProductImageCompressAll300/83-360-293-10.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-96' src="https://c1.neweggimages.com/ProductImageCompressAll300/A8X5S2111060X4RA7A5.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-96' src="https://c1.neweggimages.com/ProductImageCompressAll300/24-475-115-S05.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-96' src="https://c1.neweggimages.com/ProductImageCompressAll300/34-236-101-V26.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-96' src="https://c1.neweggimages.com/ProductImageCompressAll300/14-137-711-V01.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-96'  src="https://c1.neweggimages.com/ProductImageCompressAll300/68-105-273-V01.jpg" />
                    </div>
                   
                </div>
                <div className=' text-left'>
                    <h1 className="text-5xl text-info font-bold">SPOTLIGHT: PCS and MONITORS</h1>
                    <p className="py-6 font-bold">If you want to take things. Then there are pictures on the left, mouse them scroll and submit your favorite products.</p>
                    <button className="btn btn-secondary text-white">Submit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className=' bg-info'>
            <h1 className='text-5xl text-secondary py-10 underline border-secondary'>MY IDENTY</h1>
            <div className='flex justify-center  w-full pb-10 '>
                <div class="overflow-x-auto ">
                    <table class="table w-full border border-info ">

                        <thead>
                            <tr>
                                <th className='font-bold text-xl'>type</th>
                                <th className='font-bold text-xl'>Properties</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Name: </b> </td>
                                <td className='text-xl'>Abdul Kader Jilani</td>
                            </tr>

                             <tr className='active'>
                                <td><b>Email : </b> </td>
                                <td className='text-xl'>abdulkaderjilani120@gmail.com</td>
                            </tr>
                            <tr>
                                <td><b>Institute Name: </b> </td>
                                <td className='text-xl'>Munshiganj Polytechnic Institute</td>
                            </tr>
                            <tr className='active'>
                                <td><b>Education : </b> </td>
                                <td className='text-xl'>Diploma in Engineering</td>
                            </tr>
                            <tr>
                                <td><b>Semister: </b> </td>
                                <td className='text-xl'>7th</td>
                            </tr>
                            <tr className='active'>
                                <td><b>Deparment: </b> </td>
                                <td className='text-xl'>Computer</td>
                            </tr>
                             <tr>
                                <td><b>First Website link : </b> </td>
                                <td className='text-xl text-info'>https://ak-laptop-store-main.firebaseapp.com/</td>
                            </tr>
                            <tr className='active'>
                                <td><b>secondary Website link: </b> </td>
                                <td className='text-xl text-info'>https://ak-jilani-laptop-shop.netlify.app/</td>
                            </tr>
                            <tr>
                                <td><b>Third Website link : </b> </td>
                                <td className='text-xl text-info'>https://ak-jilani-real-estate.netlify.app/</td>
                            </tr>
                            <tr className='active'>
                                <td><b>Web design  Skills : </b> </td>
                                <td className='text-xl'> HTML , css , boostrap, taiwinds css,  react Daisyui </td>
                            </tr>
                            <tr >
                                <td><b>Web Development  Skills : </b> </td>
                                <td className='text-xl'> Javascripte , react , node , express , mongodb , firebase , stripe </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
import React from 'react';
import { useForm } from "react-hook-form";
import googleIcon from '../img/google.png'
const Resiger = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-full py-10 '>
            <div className='border-2 rounded  border-info p-10 w-50 '>
                <h3 className='text-info font-bold  text-3xl mb-5'> Sign UP</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-left">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} class="input input-info input-bordered w-screen max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.name?.type === 'required' && "Name  is required"}</span>
                        </label>
                    </div>
                    <div className="text-left">

                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input type="email" {...register("email", { required: true })} class="input input-info input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>

                        </label>
                    </div>
                    <div className="text-left">
                        <label class="label">
                            <span class="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password", { required: true, maxLength: 20 })} class="input input-info input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>

                        </label>
                    </div>
                    <input className='btn btn-info btn-block text-white mt-5' type="submit" value="Sign Up" />
                </form>

                <div class="flex flex-col w-full border-opacity-50">
                   
                    <div class="divider">OR</div>
                    <button class=" h-15 flex  rounded-box place-items-center btn btn-info text-white"><img className='w-50  h-10  mr-5' src={googleIcon}></img> Google Sign up</button>
                </div>



            </div>
        </div>
    );
};

export default Resiger;
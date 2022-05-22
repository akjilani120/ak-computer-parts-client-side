import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../img/google.png'
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
   
    let location = useLocation();   
  
    let from = location.state?.from?.pathname || "/";
    const onSubmit = ( data) => {       
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email , password)
       
    };
    const handleGoogle =() =>{
        signInWithGoogle()
    }
    let errorMessage ;
    if(user || guser){
        navigate(from, { replace: true });
    }
    if(error || gerror){
        errorMessage = (error?.message || gerror?.message)
    }
    if(loading || gloading ){
        return <Loading></Loading>
    }
    const handleNavigate =() =>{
        navigate("/resiger")
    }
    return (
        <div className='flex justify-center items-center h-full py-10 '>
            <div className='border-2 rounded  border-info p-10 w-50 '>
                <h3 className='text-info font-bold  text-3xl mb-5'> Login Now</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className="text-left">

                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input type="email" {...register("email", { required: true })} class="input input-info input-bordered w-screen max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>

                        </label>
                    </div>
                    <div className="text-left">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} class="input input-info input-bordered w-screen max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>
                        </label>
                        <p className=''>If have not an account? <button onClick={handleNavigate} className='text-primary font-bold'>Login  </button></p>
                        <p className='text-red-500'>{errorMessage}</p>
                    </div>
                    <input className='btn btn-info btn-block text-white mt-5' type="submit" value="Login" />
                </form>

                <div class="flex flex-col w-full border-opacity-50">
                   
                    <div class="divider">OR</div>
                    <button onClick={handleGoogle} class=" h-15 flex  rounded-box place-items-center btn btn-info text-white"> 
                    <img className='w-50 h-10 mr-5' src={googleIcon}/> Google Sign up</button>
                </div>



            </div>
        </div>
    );
};

export default Login;
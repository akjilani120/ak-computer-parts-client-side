import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../img/google.png'
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';
import TokenAccess from './TokenAccess';
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
    const [token] = TokenAccess(user ||  guser)
    let errorMessage ;
    if(token){
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
                   
                    <div className="text-left ">

                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input  type="email" className='input input-info w-full input-bordered w-full max-w-xs' {...register("email", { required: true })}  />
                        <label className="label">
                            <span className="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>

                        </label>
                    </div>
                    <div className="text-left">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} className="input input-info input-bordered  w-screen max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>
                        </label>
                        <p className=''>If have not an account? <button onClick={handleNavigate} className='text-primary font-bold'>Sign Up</button></p>
                        <p className='text-red-500'>{errorMessage}</p>
                    </div>
                    <input className='btn btn-info btn-block text-white mt-5' type="submit" value="Login" />
                </form>

                <div className="flex flex-col w-full border-opacity-50">
                   
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className=" h-15 flex  rounded-box place-items-center btn btn-info text-white"> 
                    <img className='w-50 h-10 mr-5' src={googleIcon}/> Google Sign up</button>
                </div>



            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useForm } from "react-hook-form";
import googleIcon from '../img/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import TokenAccess from './TokenAccess';
const Resiger = () => {
    const navigate = useNavigate()
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification:true});
      const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
     
    const handleGoogle =() =>{
        signInWithGoogle()
    }
    const [token] = TokenAccess(user || guser)
    if(token){
        navigate("/home")
    }
    let errorMessage ;
    if(error || gerror){
        errorMessage = (error?.message || gerror?.message)
    }
    if(loading || gloading ){
        return <Loading></Loading>
    }
    const onSubmit = async( data) => {
        const displayName = data.name;
        const email = data.email
        const password = data.password
        await createUserWithEmailAndPassword(email , password)
        await updateProfile({ displayName});
        toast("Success login")
    };
    const handleNavigate =() =>{
        navigate('/login')
    }
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
                        <input type="password" {...register("password", { required: true })} class="input input-info input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>
                        </label>
                        <p className=''>If have an account? <button onClick={handleNavigate} className='text-primary font-bold'>Login</button></p>
                        <p className='text-red-500'>{errorMessage}</p>
                    </div>
                    <input className='btn btn-info btn-block text-white mt-5' type="submit" value="Sign UP" />
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

export default Resiger;
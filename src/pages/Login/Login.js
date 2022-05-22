import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const hanleNavigate =() =>{
        navigate("/resiger")
    }
    return (
        <div>
            <h1>I am login page</h1>
            <button className='btn btn-success' onClick={hanleNavigate} > SignUp </button>
        </div>
    );
};

export default Login;
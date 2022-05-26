import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
      };
    const navMenu = [
        <li><Link to="/home">Home</Link></li>,
        <li><Link to="/about">About</Link></li>,
        <li><Link to="/blog">Blog</Link></li>,
        <li><Link to="/myPortfolio">My Portfolio</Link></li>,
        <li><Link to="/dashboard">Dashboard</Link></li>,
        
        <li>{ user?  
            <button onClick={logout} className='btn btn-secondary text-white'>Sign Out</button> :
            <Link to="/login">Login</Link>}</li>,
    ]
    return (
        <div>
            <div className="navbar  bg-base-100 ">
                <div className="navbar-start">               
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-secondary text-white">
                            {navMenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-secondary normal-case text-xl">Computer Parts House</a>
                </div>
               
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {navMenu}
                    </ul>
                </div>
                <div className='flex lg:hidden justify-end items-end ml-20'>
                <label for="dash-drawer" className="btn btn-secondary text-white drawer-button lg:hidden">Open drawer</label>
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;
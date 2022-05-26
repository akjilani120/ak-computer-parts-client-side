import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (

        <div className="drawer drawer-mobile">
            <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
            <h1 className='text-5xl text-secondary font-bold mb-10'>Welcome your Dashboard</h1>

            <Outlet />
              

            </div>
            <div className="drawer-side ">
                <label for="dash-drawer " className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60  bg-base-100 text-base-content border-1 border border-info">
                    
                <li><Link  to="/dashboard">My Profile</Link></li>
                <li>{ !admin && <Link to="/dashboard/addReviews">Add Reviews</Link>}</li>
                  <li>{  !admin && <Link to="/dashboard/myOrders"> My Orders</Link>}</li>
                 <li>{ admin && <Link to="/dashboard/addedProduct"> Add  Product</Link>}</li>
                   <li>{  admin &&<Link to="/dashboard/manageAllOrders"> Manage All Orders</Link> }</li>
                 <li>{  admin && <Link to="/dashboard/makeAdmin"> Make Admin</Link>}</li>                    
                   <li>{ admin && <Link to="/dashboard/manageProduct">Manage Product</Link>}</li> 
                </ul>

            </div>
        </div>
        
    );
};

export default Dashboard;
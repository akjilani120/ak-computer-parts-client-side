import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-dware" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col  ">
                <h1 className='text-5xl text-secondary font-bold mb-10'>Welcome your Dashboard</h1>
                {/* <label for="dashboard-dware" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
              
                <Outlet />
            </div>
            <div class="drawer-side " className=''>
                <label for="dashboard-dware" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">                  
                    <li><Link  to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/addReviews">Add Reviews</Link></li>
                    <li><Link to="/dashboard/myOrders"> My Orders</Link></li>
                    <li><Link to="/dashboard/addedProduct"> Add  Product</Link></li>
                    <li><Link to="/dashboard/manageAllOrders"> Manage All Orders</Link></li>
                    <li>{  admin && <Link to="/dashboard/makeAdmin"> Make Admin</Link>}</li>                    
                    <li>{ admin && <Link to="/dashboard/manageProduct">Manage Product</Link>}</li>                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-dware" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center ">
                <h1 className='text-5xl text-secondary'>Dashboard</h1>
                {/* <label for="dashboard-dware" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
              
                <Outlet />
            </div>
            <div class="drawer-side " className=''>
                <label for="dashboard-dware" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                  
                    <li><Link to="/dashboard/addReviews">Add Reviews</Link></li>
                    <li><Link to="/dashboard/myOrders"> My Orders</Link></li>
                    <li><Link  to="/dashboard/myProfile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
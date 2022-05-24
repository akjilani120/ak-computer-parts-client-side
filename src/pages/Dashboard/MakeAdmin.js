import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Admin from './Admin';

const MakeAdmin = () => {
    const { isLoading, error, data: users, refetch } = useQuery('admin', () =>
        fetch('http://localhost:5000/token', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken")
                }
                return res.json()
            }

            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-info text-5xl font-bold my-10 underline decoration-info'>User List</h1>
            <div>

                <div class="overflow-x-auto mb-10">
                    <table class="table w-10/12">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Add Admin </th>
                                <th>Remove Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <Admin key={user._id} index={index} user={user} refetch={refetch}></Admin>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default MakeAdmin;
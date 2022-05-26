import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Admin = ({user , index, refetch}) => {
    const {email , role } = user;
    const handleMakeAdmin =() =>{
        fetch(`http://localhost:5000/token/admin/${email}`,{
            method:"PUT",
            headers:{                
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                alert("Fobidden Access. Please Login then come back this page")
                signOut(auth)
                localStorage.removeItem("accessToken")
            }
            return res.json()
        }
        )
        .then(data => {       
           if(data.modifiedCount > 0){
            refetch()    
            toast("Successfully  made an admin")
           }
           
        })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{ role !=="admin" && <button onClick={handleMakeAdmin} className="btn btn-xs btn-secondary text-white">Add admin</button>}</td>
        <td><button className="btn btn-xs btn-error text-white">Revome admin</button></td>
    </tr>
    );
};

export default Admin;
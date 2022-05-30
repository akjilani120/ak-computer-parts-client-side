import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';

const UseAdmin = (user) => {
    const [admin , setAdmin] = useState(true)
    const [adminLoading , setAdminLoading] = useState(true)
    useEffect(() =>{
        const email = user?.email
        fetch(`https://sleepy-plains-20248.herokuapp.com/admin/${email}`, {
            method: "GET",
            headers: {
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
        .then(data =>{            
            setAdmin(data)
            setAdminLoading(false)
        })
    } , [user])
    return [admin , adminLoading]
};

export default UseAdmin;
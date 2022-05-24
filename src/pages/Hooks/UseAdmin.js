import React, { useEffect, useState } from 'react';

const UseAdmin = (user) => {
    const [admin , setAdmin] = useState(true)
    const [adminLoading , setAdminLoading] = useState(true)
    useEffect(() =>{
        const email = user?.email
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
        .then(res => res.json())
        .then(data =>{            
            setAdmin(data)
            setAdminLoading(false)
        })
    } , [user])
    return [admin , adminLoading]
};

export default UseAdmin;
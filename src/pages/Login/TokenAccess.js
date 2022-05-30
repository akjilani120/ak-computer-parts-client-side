import React, { useState } from 'react';

const TokenAccess = (user) => {
    const [token , setToken] = useState('')
      const email = user?.user?.email; 
      console.log(" i am email", email)     
      if(email){
        const currentEmail = {
          email: email
        }
        fetch(`https://sleepy-plains-20248.herokuapp.com/token/${email}`, {
          method:"PUT", 
          headers:{
            "content-type" : "application/json",            
          },
          body: JSON.stringify(currentEmail)
        })
        .then(res => res.json())
        .then(data =>{
         if(data){
          const accessToken = data.token
          if(accessToken){
           
            localStorage.setItem("accessToken" , accessToken)
            
          }
          setToken(data)
         }
        })
      }
    
     
    return [token]
};

export default TokenAccess;
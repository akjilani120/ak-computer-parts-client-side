import React from 'react';

const Myorder = ({order , index}) => {
    const {productName , price , quantity , userEmail} = order;
   
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{userEmail}</td>
        <td><button class="btn btn-xs btn-secondary">Tiny</button></td>
        
      </tr>
    );
};

export default Myorder;
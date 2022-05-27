import React from 'react';

const AllOrdersROw = ({order , index}) => {
    const {productName , price , quantity , userName , paid , } = order;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{userName}</td>
        <td>
          {(price && !paid) && <button className='btn btn-secondary text-white btn-xs'>Unpaid</button>}
          {(price && paid) && <div>
            <span className='btn btn-success text-white btn-xs'>Paid</span>           
            </div>}
          </td>
        
      </tr>
    );
};

export default AllOrdersROw;
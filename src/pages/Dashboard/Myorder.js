import React from 'react';
import { Link } from 'react-router-dom';
const Myorder = ({order , index}) => {
    const {productName , price , quantity , userName , paid , _id , transctionId} = order;
    console.log(order)
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{userName}</td>
        <td>
          {(price && !paid) && <button className='btn btn-secondary text-white btn-xs'><Link to={`/dashboard/payment/${_id}`}>Payment</Link></button>}
          {(price && paid) && <div>
            <span className='btn btn-success text-white btn-xs'>Paid</span>
            <p className="text-secondary">{transctionId}</p>
            </div>}
          </td>
        
      </tr>
    );
};

export default Myorder;
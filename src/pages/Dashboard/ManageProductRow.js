import React from 'react';
import { useQuery } from 'react-query';

const ManageProductRow = ({ product, index ,refetch , handleDelete, setId}) => {
    const { name, img, _id } = product;
   

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt="product image" />
                </div>
            </div>
            </td>
            <td>{name}</td>           

            <td>  
                <label   onClick={() => setId(_id)} for="delete-btn" className="btn btn-error modal-button font-bold text-white">Delete</label>
       
               
            </td>
        </tr >
    );
};

export default ManageProductRow;
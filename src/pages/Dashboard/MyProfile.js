import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const handleSubmit = event => {
        event.preventDefault()
         const name= user.name;
         const email = user.email;
         const  education = event.target.education.value;
          const address = event.target.address.value;
          const phone = event.target.phone.value;
          const img = event.target.image.value;
          console.log("put data" , name, email, education, address, phone, img)
        const updatPhofile = {
            name:name,
            email:email,
            education:education,
            address:address,
            phone:phone,
            img:img
        }
        fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatPhofile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Your reviews is success.Thanks for reviews")
            })
    }
    return (
        <div className='flex justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl bg-info ">
                <h1 className='text-secondary font-bold text-2xl mt-5'>Profile Update</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Profile User name</span>
                            </label>
                            <input type="text"  name='name' value={user.displayName} placeholder="Add Point" class="input input-bordered text-2xl" disabled />
                        </div>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Profile User Email</span>
                            </label>
                            <input type="text" name='email' value={user.email} placeholder="Add Point" class="input input-bordered border-secondary border-3 text-xl"  disabled/>
                        </div>
                        
                        <div class="flex flex-col w-full mt-5 border-opacity-100 "> 
                         <hr className='bg-white border-2'></hr>                          
                            <div class="divider text-white border-white" >Update Profile</div>
                            <hr className='bg-white border-2'></hr>  
                        </div>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Add Your education</span>
                            </label>
                            <input type="text" name='education'  placeholder="Education" class="input input-bordered"  />
                        </div>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Add your Address</span>
                            </label>
                            <input type="text" name='address'  placeholder="Address" class="input input-bordered"  />
                        </div>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Add your Phone Number</span>
                            </label>
                            <input type="text" name='phone'  placeholder="Number" class="input input-bordered"  />
                        </div>
                        <div class="form-control mb-5">
                            <label class="label">
                                <span class="label-text text-white text-white">Add your Image Link</span>
                            </label>
                            <input type="text" name='image'  placeholder="Image Link" class="input input-bordered" />
                        </div>
                        <div class=" mt-6">
                            <input value='Update ' type="submit" class="btn btn-secondary text-white"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
import axios from 'axios';
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

const UpdateUser = ({
    updateUserDetail,
    onClose,
    callFn
}) => {

    const { role } = updateUserDetail;
    const [roleUpdate, setRoleUpdate] = useState(role);


    const handleRole = (e) => {
        setRoleUpdate(e.target.value);
    }

    const handleUpdate = async (req,res) => {
        const response = await axios.put('/api/update',{...updateUserDetail,role:roleUpdate});
        if(response.data.success){
            console.log(response.data);
             toast.success(response.data.message);
             callFn();
             onClose();
        }
    }


    // console.log(updateUserDetail);
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
            <div className='bg-white mx-auto p-4 w-[80%] md:w-[50%] shadow-xl border border-slate-600'>
                <button className=' block ml-auto' onClick={onClose}><MdClose /></button>
                <div className='px-4 space-y-3'>
                    <p>Name : {updateUserDetail.name}</p>
                    <p>Email : {updateUserDetail.email}</p>
                    <p>id : {updateUserDetail._id}</p>
                    <select
                        name="role"
                        id="role"
                        defaultValue={role}
                        className='border border-black'
                        onChange={handleRole}>
                        <option value="General">General</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button className='border border-black px-2 block ml-auto hover:scale-110 duration-300 bg-slate-300'
                        onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser

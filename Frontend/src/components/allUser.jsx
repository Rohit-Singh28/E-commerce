import axios from 'axios';
import React from 'react'
import  { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import UpdateUser from './UpdateUser';



const AllUser = () => {

    const [allUser, setAllUser] = useState([]);
    const [updateForm,setUpdateForm] = useState(false);
    const [updateUserDetail,setUpdateUserDetail] = useState({
        email:"",
        name:"",
        role:"",
        _id:""
    })

    const onClose = () => {
        setUpdateForm(!updateForm);
    }


    const fetchAllUser = async () => {
        const allUserDetail = await axios.get('/api/all-user');
        if (allUserDetail.data.success) {
            setAllUser(allUserDetail.data.data)
        }
    }

    const handleUpdate =  (ele) => {
        setUpdateForm(!updateForm)
        setUpdateUserDetail(ele);
    }

    useEffect(() => {
        fetchAllUser();
    }, [])

  return (
    <div>
     <table className=' w-full'>
                    <caption className='text-xl font-bold  p-2'>All User Details</caption>
                    <tbody>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>edit</th>
                        </tr>

                        {
                            allUser.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.role}</td>
                                        <td className='pl-8' ><div className=' hover:text-xl duration-200 ' onClick={() => handleUpdate(ele)}><GrEdit /></div></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table> 

                {updateForm && <UpdateUser updateUserDetail = {updateUserDetail} onClose = {onClose} callFn = {fetchAllUser}/>}

    </div>
  )
}

export default AllUser

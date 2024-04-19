import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import style from '../../../CSS/addEmp.module.css'

function Edit() {
    const[empname,setEmpName]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')

    useEffect(()=>{
        let email = localStorage.getItem('email')
        axios.get('http://localhost:8080/employee/getEmployee',{
            headers:{
                'email':email
            }
        })
        .then((res)=>{
            setEmpName(res.data.empname)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setPassword(res.data.password)
            setAddress(res.data.address)
            toast('profile updated successfully..')
        })
        .catch((err)=>console.log(err))

    },[])

    const updateEmployee=()=>{
            axios.put('http://localhost:8080/employee/edit',{
                empname,email,password,phone,password
            })
            .then((res)=>{
                    toast('profile updated successfully..')
            })
            .catch((err)=>console.log(err))
    }

  return (
    <div>
         <div className={style.main}>
        <div className={style.left}>
        
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" value={empname} onChange={(e)=>setEmpName(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <label htmlFor="">Phone</label>
          <input type="number" name="" id="" value={phone} onChange={(e)=>setPhone(e.target.value)} />

           <label htmlFor="">Email</label>
          <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />

           <label htmlFor="">Adress</label>
          <input type="textarea" value={address} name="" id="" />

           <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray" for="user_avatar">Upload Picture</label>
  <input className="block text-sm text-gray-900 border cursor-pointer  focus:outline-none " disabled aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
       
           <button className={style.button30} role="button" onClick={updateEmployee}>Save</button>
         </div> 

    
      </div>
    </div>
   
  )
}

export default Edit
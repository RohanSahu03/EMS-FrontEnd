import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import style from '../../../CSS/addEmp.module.css'

function Edit() {
    const[empname,setEmpName]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[mid,setMid]=useState('')
     const[hid,setHid]=useState('')
     const[status,setStatus]=useState('')
     const[designation,setDesignation]=useState('')
    const [image,setImage]=useState('')
    const inputref =useRef(null)
    
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
            setAddress(res.data.address)
            setAddress(res.data.address)
            setHid(res.data.hid)
            setMid(res.data.mid)
            setStatus(res.data.status)
            
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

    const handleImageClick=()=>{
      inputref.current.click()
    }

    const handleImageChange=(event)=>{
        const file = event.target.files[0]
        setImage(file)
    }
  return (
    <div className='bg-gray-700 rounded-2'>
        <div className="rounded-full  w-[80px] h-[80px] border-2 mx-6 relative top-6  border-amber-300 shadow-2xl">
         {
          image ? ( <img src={URL.createObjectURL(image)}  alt="" srcset="" className='rounded-full w-[78px] h-[77px] bg-cover ' />
          ):(<img src='./images/dashboard/emp/avatar.png' alt="" srcset=""  />)
         }
      <img src="./images/dashboard/emp/camer.png" onClick={handleImageClick} alt="" srcset="" className='w-9 h-9 relative bottom-4 left-12  animate-bounce' />
            <input type="file" name="" id="" style={{display:'none'}} onChange={handleImageChange}  ref={inputref}/>
        </div>
     
      <div className="flex justify-evenly mt-8">
        <div className="left flex flex-col">
         <label for="first_name" className="block  text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input
        type="text"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />
               
          <label for="first_name" className="block  text-sm font-medium text-gray-900 dark:text-white">Phone</label>
          <input
        type="tel"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />
          
          <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">Email</label>
       <input
        type="email"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

        <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">Address</label>
       <input
        type='text'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />
    
        </div>

        <div className="right flex flex-col">

        <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">Designation</label>
  <input
        type="text"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        disabled
      />

       <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">HR Id</label>
  <input
        type="text"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        disabled
      />

       <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">Manager Id</label>
  <input
        type="text"
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        disabled
      />

       <label for="" className="block  text-sm font-medium text-gray-900 dark:text-white">Status</label>
       <input
        type='text'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        disabled
      />

        </div>
      </div>
     <button className={style.buttonEmp}>Update</button>   
        
    </div>
   
  )
}

export default Edit
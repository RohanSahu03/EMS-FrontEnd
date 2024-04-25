import React,{useState}from 'react'
import style from '../../../CSS/addEmp.module.css'
import { toast } from 'react-toastify'
import axios from 'axios'

function AddAdmin() {
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [phone,setPhone]=useState('')
const [address,setAddress]=useState('')
const [designation,setDesignation]=useState('')

const saveAdmin=()=>{
  axios.post('http://localhost:8080/createadmin',{
    name,email,phone,password,address,designation
  })
  .then((res)=>{
    if(res.status===200){
toast('admin saved suucessfully')
    }
    
  })
  .catch((error)=>{
    if(error.response){
      toast('Something went wrong')
    toast('Please try again..')
    }
  })
}

  return (
    <div>
      <div className={style.main}>
        <div className={style.left}>
        
             <input
        type="text"
        placeholder='Admin Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setName(e.target.value)}
       value={name}
      />

         <input
        type="email"
        placeholder='Email'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setEmail(e.target.value)}
       value={email}
      />

       <input
        type="password"
        placeholder='Password'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setPassword(e.target.value)}
       value={password}
      />
     
     
      <input
        type="text"
        placeholder='Address'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setAddress(e.target.value)}
       value={address}
      />
        </div>
        <div className={style.right}>
          <input
        type="phone"
        placeholder='Phone'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setPhone(e.target.value)}
       value={phone}
      />
      <input
        type="text"
        placeholder='Designation'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        onChange={(e)=>setDesignation(e.target.value)}
       value={designation}
      /> 
 <select id="underline_select"  className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6">
      <option className='bg-gray-500 text-gray-400' selected>Choose Mode</option>
      <option className='bg-gray-500' value="On Bench">Active</option>
      <option className='bg-gray-500' value="On Project">Inactive</option>
  </select> 

       <label htmlFor="" className='text-gray-400'>Gender</label>
    <div className="flex ">
  <div className="flex items-center w-40 mt-3">
    <input id="gender-option-1" type="radio" name="gender" value="Male" className="w-5 h-5 " />
    <label for="gender-option-1" className="block ms-2 relative left-3  bottom-2 text-md font-md text-gray-400 ">
     Male
    </label>
  </div>
  <div className="flex items-center w-40 mt-3">
    <input id="gender-option-2" type="radio" name="gender" value="Female" className="w-5 h-5"/>
    <label for="gender-option-2" className="block ms-2 relative left-3  bottom-2   text-md font-md text-gray-400">
      Female
    </label>
  </div>
  </div>
        </div>
      </div>
       <button className={style.buttonadmin} onClick={saveAdmin}>Save</button>
    </div>
  )
}

export default AddAdmin
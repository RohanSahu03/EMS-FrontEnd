import React, {useState } from 'react'
import style from '../../../CSS/addEmp.module.css'
import axios from 'axios'


function AddClient() {
  const [cname,setCname]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
   const [location,setLocation]=useState('')

   const saveClient=(e)=>{
      e.preventDefault()
    
   }
  
  return (
    <div>
        <div className=" flex justify-center items-center  item-center h-[520px]">
            <div className=" h-[400px] w-5/12 flex justify-evenly flex-col ">
                       <input
        type="text"
        placeholder='Client Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setCname(e.target.value)}
      />

         <input
        type="email"
        placeholder='Email'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setEmail(e.target.value)}
      />

       <input
        type="phone"
        placeholder='Phone'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
        onChange={(e)=>setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder='Location'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setLocation(e.target.value)}
      />
      <button className={style.buttonclient} onChange={saveClient}>Save</button>
            </div>
        </div>
        
    </div>
  )
}

export default AddClient
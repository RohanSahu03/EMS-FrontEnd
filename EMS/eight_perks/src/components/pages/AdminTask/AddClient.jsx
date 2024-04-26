import React, {useState } from 'react'
import style from '../../../CSS/addEmp.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'


function AddClient() {
  const [name,setName]=useState('')
  const [pocemail,setPocemail]=useState('')
  const [poc_phone,setPocphone]=useState('')
   const [loc,setLoc]=useState('')

   const saveClient=(e)=>{
      e.preventDefault()
    axios.post('http://localhost:8080/saveClient',{
      name,pocemail,poc_phone,loc
    }).then((res)=>{
      if(res.status===200){
        toast('Client saved successfully')
      }
    }).catch((error)=>{
if(error.response){
  toast('something went wrong..')
}
    })
   }
  
  return (
    <div>
        <div className=" flex justify-center items-center  item-center h-[520px]">
            <div className=" h-[400px] w-5/12 flex justify-evenly flex-col ">
                       <input
        type="text"
        placeholder='Client Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setName(e.target.value)}
      />

         <input
        type="email"
        placeholder='Email'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setPocemail(e.target.value)}
      />

       <input
        type="phone"
        placeholder='Phone'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
        onChange={(e)=>setPocphone(e.target.value)}
      />

      <input
        type="text"
        placeholder='Location'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setLoc(e.target.value)}
      />
      <button className={style.buttonclient} onChange={saveClient}>Save</button>
            </div>
        </div>
        
    </div>
  )
}

export default AddClient
import React, { useState,useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

function Leave() {

  const [leaveDetails,setLeaveDetails]=useState({})
  const [startdate,setStartDate]=useState('')
  const [enddate,setEndDate]=useState('')
 const [reason,setReason]=useState('')
 let email=useRef('')
  useEffect(() => {
    email.current= localStorage.getItem('email')
    axios.get('http://localhost:8080/employee/leave',{
       headers:{
         'email':email
       }
    })
    .then((res)=>{
      if(res.status===200){
          setLeaveDetails(res.data)
          
      }
    }).catch((error)=>{
      if(error.response){
        toast('something went wrong')
      }
    })
  
    
  }, [])

  const applyLeave =()=>{
      axios.post('http://localhost:8080/employee/applyLeave',{
        headers:{
       'email':email
        },
        data:{startdate,enddate,reason}
      }).then((res)=>{
        if(res.status===200){
          toast('applied successfully..')
        }
      }).catch((err)=>{
        if(err.response){
          toast('something went wrong')
        }
      })
  }
  
  return (
    <div>
        <div className="main  flex w-full h-full flex-col">
          <div className="upper mt-6 flex justify-evenly h-[100px] ">
            <div className="totalLeave w-40 h-14 bg-red-600 shadow-lg rounded-2">
              {leaveDetails.totalleave}
            </div>
          <div className="remainLeave w-40 h-14 bg-red-600 shadow-lg rounded-2">
            {leaveDetails.remainleave}
          </div>
          </div>
          <div className="lower flex mt-6 flex-col justify-center items-center w-full">
                <input
        type="text"
        placeholder='Start date'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={startdate}
        onChange={(e)=>setStartDate(e.target.value)}
      />
               
          <input
        type="text"
        placeholder='End Date'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={enddate}
        onChange={(e)=>setEndDate(e.target.value)}
      />
          
       <input
        type="text"
        placeholder='Reason of Leave'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-50% py-2 pl-2 mb-6"
        value={reason}
        onChange={(e)=>setReason(e.target.value)}
      />
          </div>
          <button onClick={applyLeave} className='w-36 h-12 rounded-2 bg-blue-400 text-white relative left-[540px] top-[50px]'>Apply Leave</button>
        </div>    
    </div>
  )
}

export default Leave
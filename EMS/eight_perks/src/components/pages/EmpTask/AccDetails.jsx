import React, { useRef, useState } from 'react'
import style from '../../../CSS/addEmp.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function AccDetails() {
  const [accholder,setHolderName]=useState('')
  const [acc_no,setAccNumber]=useState('')
  const [bankname,setBankName]=useState('')
  const [ifsc_code,setIfscCode]=useState('')
  const [branch,setBranch]=useState('')
  const [accDetail,setAccDetail]=useState({})
  let email = useRef('')
  useState(()=>{
        email=localStorage.getItem('email')
      axios.get(`http://localhost:8080/employee/getAccount`,{
        headers:{
          'email':email
        }
      }).then((res)=>{
        if(res.status===200){
          setAccDetail(res.data)
        }
      }).catch((error)=>{
        if(error.response){
          toast('something went wrong')
        }
      })
  },[])

  return (
    <div>
      {accDetail!==null ? (
          <>
          <h3 className='text-center'>You dont have any account details</h3>
          <h4 className='text-center'>Please create an account</h4>
          <br />
          <button  className='w-36 h-12 rounded-2 bg-blue-400 text-white relative left-[540px] top-[50px]'>Apply Leave</button>

          </>
      ):(
      
       <div className={style.main}>
        <div className={style.left}>
        
             <input
        type="text"
        placeholder='Account Holder Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
       onChange={(e)=>setHolderName(e.target.value)}
       value={accholder}
      />

         <input
        type="text"
        placeholder='Account Number'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setAccNumber(e.target.value)}
       value={acc_no}
      />

       <input
        type="text"
        placeholder='Bank Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setBankName(e.target.value)}
       value={bankname}
      />
     
     
      <input
        type="text"
        placeholder='IFSC Code'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setIfscCode(e.target.value)}
       value={ifsc_code}
      />
        <input
        type="text"
        placeholder='Branch Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
         onChange={(e)=>setBranch(e.target.value)}
       value={branch}
      />
              <button className='w-36 h-12 rounded-2 bg-blue-400 text-white relative left-[140px] top-[30px]'>Add Account</button>

        </div>
      </div>
        
      )}
     
    </div>
  )
}

export default AccDetails
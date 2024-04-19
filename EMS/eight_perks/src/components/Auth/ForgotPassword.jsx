import React, {useState,useEffect, useRef } from 'react'
import Layout from '../Layout'
import { useNavigate} from 'react-router-dom'
import style from '../../CSS/otp.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function ForgotPassword() {
  let navigate = useNavigate()
    const [password,setPassword]=useState('')
     const [cpassword,setCPassword]=useState('')
    let localEmail=useRef('')
     useEffect(() => {
      localEmail.current=localStorage.getItem('email')
     }, [])
     

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8080/resetpassword',
  headers: { 
    'email': localEmail, 
    'password': password
  }
 
};

 
  
  const resetPassword= ()=>{
    // let localEmail = localStorage.getItem('email')
 
      if(password===cpassword){
     axios.request(config)
      .then((res)=>{
           if(res!=null){
            toast('password reset successfully')
            navigate('/admin-login')
          }
          else{
            toast(res.data)
          }
      })
      .catch((err)=>console.log(err))
    }else{
      toast('password mismatched')
    }
     
  }

  return (
    <Layout>
         <div className={style.main}>
        <div className={style.left}>

          <label htmlFor="">Password</label>
          <input type="password" name="abc" value={password} onChange={(e)=>setPassword(e.target.value)}  />

          <label htmlFor="">Confirm Password</label>
          <input type="password" name="abc" value={cpassword} onChange={(e)=>setCPassword(e.target.value)}  />

          <button className={style.button30} onClick={resetPassword}>Update</button>

        </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword
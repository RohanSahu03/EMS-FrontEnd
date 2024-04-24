import React, {useState,useEffect, useRef } from 'react'
import Layout from '../Layout'
import { useLocation, useNavigate} from 'react-router-dom'
import style from '../../CSS/otp.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function ForgotPassword() {
  let navigate = useNavigate()
   
    const [password,setPassword]=useState('')
     const [cpassword,setCPassword]=useState('')
    const location = useLocation()
    let email=useRef('')
    let designation=useRef('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    
     email.current = searchParams.get('email');
     designation.current = searchParams.get('designation');

  }, [location.search]); 

     

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8080/resetpassword',
  headers: { 
    'email': email, 
    'password': password
  }
 
};

 
  
  const resetPassword= ()=>{
 
      if(password===cpassword){
     axios.request(config)
      .then((res)=>{
           if(res.status===200){
            toast('password reset successfully')
               if(designation==='admin'){
            navigate('/admin-login')
           }
           if(designation==='employee'){
            navigate('/employee-login')
           }
            if(designation==='hr'){
            navigate('/hr-login')
           }
           if(designation==='manager'){
            navigate('/manager-login')
           }
          
          }
      })
      .catch((error)=>{
        if(error.response){
  toast('Enter Valid Credentials')
  } 
      })
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
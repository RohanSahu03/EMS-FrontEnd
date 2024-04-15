import React, { useState,useEffect } from 'react'
import Layout from '../Layout'
import { useLocation, useNavigate } from 'react-router-dom'
import style from '../../CSS/addEmp.module.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function ForgotPassword() {
  let navigate = useNavigate()
  const location = useLocation()
  const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  useEffect(() => {
   setEmail(location.state)
  }, [])
  
  const resetPassword= async()=>{
      const res = await axios.put('http://localhost:8080/resetpassword',{email,password})
      try{
          if(res!=null){
            toast('password reset successfull')
            navigate('/adminDashboard')
          }
          else{
            toast('som3ething went wrong')
          }
      }
      catch(err){
          console.log(err);
      }
  }

  return (
    <Layout>
         <div className={style.main}>
        <div className={style.left}>
        
          <label htmlFor="">Email</label>
          <input type="email" name="" value={email} />

          <label htmlFor="">Password</label>
          <input type="password" name="" value={password} onChange={(e)=>setPassword(e.target.value)}  />

          <button className={style.button30} onClick={resetPassword}>Save</button>

        </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword
import React, { useState } from 'react'
import style from '../../CSS/otp.module.css'
import { useNavigate,useLocation} from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../Layout'

function Otp() {
  let navigate=useNavigate()
   const location = useLocation();
  const data = location.state;
const [otp,setOtp]=useState('')

    const handleOtp=()=>{
            let responseOtp = localStorage.getItem('otp')
            if(responseOtp===otp){
                toast('successfully logged in..')
      setTimeout(()=>{
 if(data==='admin'){
                   navigate('/adminDashboard')
                 }
                 if(data==='employee'){
                   navigate('/employeeDashboard')
                 }
                  if(data==='hr'){
                   navigate('/hrDashboard')
                 }
                 if(data==='manager'){
                   navigate('/managerDashboard')
                 }
      },3000)   
            }
            else{
                toast('otp mismatched')
            }
    }

  return (
    <Layout>
        <div className={style.main}>
        <div className={style.left}>
            <h4>We have sent an OTP</h4>
        <h3>Please check your email account </h3>
        <br />
        <br />
           <label htmlFor="">OTP:</label>
          <input type="text" name="" id="" value={otp} placeholder='Enter otp' onChange={(e)=>setOtp(e.target.value)} style={{color:'black'}}/>
        <br />
          <button className={style.button30} onClick={handleOtp}>Submit</button>

        </div>
      </div>
   </Layout>
  )
}

export default Otp


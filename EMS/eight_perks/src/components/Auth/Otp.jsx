import React, { useState } from 'react'
import style from '../../CSS/otp.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../Layout'

function Otp() {
  let navigate=useNavigate()
  let location = useLocation()
  let data = location.state.endPoint;
const [otp,setOtp]=useState('')
    const handleOtp=()=>{
            let responseOtp = localStorage.getItem('otp')
            if(responseOtp===otp){
                toast('successfully logged in..')
            console.log(data);
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
          <input type="text" name="" id="" value={otp} placeholder='Enter otp' onChange={(e)=>setOtp(e.target.value)} style={{backgroundClip:'black',color:'white'}}/>
        <br />
          <button className={style.button30} onClick={handleOtp}>Submit</button>

        </div>
      </div>
   </Layout>
  )
}

export default Otp
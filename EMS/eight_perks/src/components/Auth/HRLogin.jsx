import React, { useState } from "react";
import Layout from "../Layout";
import style from '../../CSS/login.module.css'
import { Link, useNavigate} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import { toast } from "react-toastify";



export default function HRLogin() {

const [modal, setModal] = useState(false);
const navigate = useNavigate()
const toggle = () => setModal(!modal);
const [email,setEmail]=useState('')
const [passwordData,setpasswordData]=useState('');
const [showPasswordData,setShowPasswordData]=useState(false);
const [itype,setItype]=useState('password')
const [email2,setEmail2]=useState('')



function handleInput(e){
    setpasswordData(e.target.value)
}

function handleShowPassword(){
  setShowPasswordData(!showPasswordData)
  if(showPasswordData){
     setItype('text')
    
  }
  else{
   setItype('password')
  }
}

const handleLogin=()=>{
 
  axios.get(`http://localhost:8080/hr/login`, {
    headers: {
        'email': email,
        'password': passwordData
    }
 }).then((res)=>{
  if(res!=null){
    localStorage.setItem('otp',res.data)
   navigate('/submitOtp')
  }
 }).catch((err)=>console.log(err))
}

const sendMail= ()=>{
 axios.get(`http://localhost:8080/hr/resetpasswordmail`,{
  params:{
   'email':email2
  }
 })
.then((res)=>{
if(res.data===email2){
  console.log(res)
    toast('please check your email account')
    localStorage.setItem('email',res.data)
  }
  else{
    toast('enter valid email id')
  }
})
.catch((err)=>console.log(err))
  
}

  return (
    <Layout>
    <div className={`${style.upperDiv} flex justify-end items-center  w-full min-h-[600px]  `}>
     
    <div className={`${style.innerDiv}  flex shadow-md flex-col justify-center items-center md:flex-row h-[500px] w-1/3`}>
    
        {/* <div className={`${style.leftDiv} h-1/2 w-full md:w-1/2 md:h-full flex justify-center align-center`}>
         <img src="./images/login/loginIllustration.jpg" className={` w-full h-full content-cover`} alt="dd" srcset="" />
        </div> */}
        <div className={`${style.rightDiv} rightDiv  `}>
       
            <form action="">
               <img src="./images/login/lock.png" alt="" srcset="" />
              <h6 style={{fontFamily:'Kalam'}}>Sign In As HR</h6>

                 <label className={style.formlabel}>E-mail</label>
                  <div className={style.emailDiv}>
                    <input type='email' name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className={style.textbox} required />
                  </div>

                   <label className={style.formlabel2}>Password</label>
                  <div className={style.emailDiv}>
                    <input type={itype} name="password" placeholder="Password" value={passwordData} onChange={handleInput} className={style.textbox} required />
                    {showPasswordData ? ( <img src="./images/login/eye-close.png" onClick={handleShowPassword} alt="" srcset="" />):
                    (<img src="./images/login/eye-open.png" style={{width:'27px', height:'20px'}} onClick={handleShowPassword} alt="" srcset="" />)}
            
                  </div>
                  <br />
                  <Link to='' onClick={toggle} className={style.forgotpassword}>Forgot Password ?</Link>
                       
              <div className={style.footer1}>
			<h5>New here? <Link to="/register">Sign Up.</Link></h5>
      </div>
       
       {/* ----Modal---- */}
       <Modal isOpen={modal} toggle={toggle} className={style.modal} >
        <ModalHeader toggle={toggle}>Forgot Password</ModalHeader>
        <ModalBody>
         <div className={style.row}>
		<h1>Forgot Password</h1>
    <br />
		<h6 className={style.infoText}>Enter your registered email to reset your password.</h6>
    <br />
		<div className={style.formgroup}>
      <p><label for="username">Email</label></p>
			<input type="email" name="user_email" id="user_email" value={email2} onChange={(e)=>setEmail2(e.target.value)}/>
			<br />
      <br />
			<button onClick={sendMail}>Send</button>
		</div>
		<div className={style.footer}>
			<h5>New here? <Link to="/register">Sign Up.</Link></h5>
        <br />
			<h5>Already have an account? <Link to="/admin-login">Sign In.</Link></h5>
      <br />
    
      </div>
      </div>
      
        </ModalBody>
        <ModalFooter>
         <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

                 <br />
            
                  <button type="button" onClick={handleLogin} className={style.loginbtn}>Login</button>
              
            </form>
        </div>
    </div>

    </div>
    </Layout>
  );
}
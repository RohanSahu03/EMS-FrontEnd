import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import style from '../../../CSS/addEmp.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddEmp() {
 const [startDate, setStartDate] = useState(new Date());
const [empname,setEmpName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [designation,setDesignation]=useState('')
const [pname,setPname]=useState('')
const [phone,setPhone]=useState('')
const [sal,setSal]=useState('')
const [gender,setGender]=useState('')
const [hid,setHid]=useState('')
const [mid,setMid]=useState('')
const [status,setStatus]=useState('')

const navigate=useNavigate()

const saveEmployee= async()=>{
  const res =  await axios.post('http://localhost:8080/createemployee',
{
  empname,email,password,designation,pname,phone,sal,startDate,gender,hid,mid,status
})

try{
if(res!=null){
 setTimeout(()=>{
   toast('Employee Saved Successfully.')
 },4000)
  
}
else{
  toast('Something went wrong..')
}
}
catch(err){
  console.log(err);
}

}


  return (
    <div>
      <div className={style.main}>
        <div className={style.left}>
         <input
        type="text"
        placeholder='Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={empname}
        onChange={(e)=>setEmpName(e.target.value)}
      />

       <input
        type="password"
        placeholder='Password'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
     
       <input
        type="text"
        placeholder='Designation'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
      />
        
         <input
        type="phone"
        placeholder='Contact Number'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />
 
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6" />

         <input
        type="text"
        placeholder='Project Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={pname}
        onChange={(e)=>setPname(e.target.value)}
      /> 
        </div>
        <div className={style.right}>
         <input
        type="email"
        placeholder='Email'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      /> 
      
       <input
        type="text"
        placeholder='Salary'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={sal}
        onChange={(e)=>setSal(e.target.value)}
      /> 

           <input
        type="text"
        placeholder='Manager Id'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={mid}
        onChange={(e)=>setMid(e.target.value)}
      /> 
 <input
        type="text"
        placeholder='HR Id'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6"
        value={hid}
        onChange={(e)=>setHid(e.target.value)}
      /> 

           
  <select id="underline_select" value={status} onChange={(e)=>setStatus(e.target.value)}  className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-red-500 w-full py-2 pl-2 mb-6">
      <option className='bg-gray-500 text-gray-400' selected>Choose Status</option>
      <option className='bg-gray-500' value="On Bench">On Bench</option>
      <option className='bg-gray-500' value="On Project">On Project</option>
  </select> 

  <label htmlFor="" className='text-gray-400'>Gender</label>
    <div className="flex ">
  <div className="flex items-center w-40 mt-3">
    <input id="gender-option-1" type="radio" name="gender" value="Male" className="w-5 h-5 " onChange={(e)=>setGender(e.target.value)} checked={gender === 'Male'}/>
    <label for="gender-option-1" className="block ms-2 relative left-3  bottom-2 text-md font-md text-gray-400 ">
     Male
    </label>
  </div>
  <div className="flex items-center w-40 mt-3">
    <input id="gender-option-2" type="radio" name="gender" value="Female" className="w-5 h-5" onChange={(e)=>setGender(e.target.value)} checked={gender === 'Female'}/>
    <label for="gender-option-2" className="block ms-2 relative left-3  bottom-2   text-md font-md text-gray-400">
      Female
    </label>
  </div>
  </div>

        </div>

      </div>
                <button className={style.button30} onClick={saveEmployee} >Save</button>

    </div>
  )
}

export default AddEmp
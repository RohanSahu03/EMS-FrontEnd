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
const [gender,setGender]=useState('Male')
const [mgr,setMgr]=useState('')
const [mgrname,setMgrName]=useState('')
const [hr,setHr]=useState('')
const [hid,setHid]=useState('')
const [mid,setMid]=useState('')
const [status,setStatus]=useState('')

const navigate=useNavigate()

const saveEmployee= async()=>{
  const res =  await axios.post('http://localhost:8080/createemployee',
{
  empname,email,password,designation,pname,phone,sal,startDate,gender,mgr,
  mgrname,hr,hid,mid,status
})

try{
if(res!=null){
  toast('Data Saved Successfully.')
   navigate('/viewEmp')
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
        
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" value={empname} onChange={(e)=>setEmpName(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} />

           <label htmlFor="">Designation</label>
          <input type="text" name="" id="" value={designation} onChange={(e)=>setDesignation(e.target.value)} />

        <label htmlFor="">Phone</label>
          <input type="number" name="" id="" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        
        <label htmlFor="">Joining Date</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

         <label htmlFor="">PName</label>
          <input type="text" name="" id="" value={pname} onChange={(e)=>setPname(e.target.value)}/>

           <label htmlFor="">Salary</label>
          <input type="text" name="" id=""value={sal} onChange={(e)=>setSal(e.target.value)} />

           <label htmlFor="">Manager</label>
          <input type="text" name="" id="" value={mgr} onChange={(e)=>setMgr(e.target.value)} />

           <label htmlFor="">Manager Id</label>
          <input type="text" name="" id="" value={mid} onChange={(e)=>setMid(e.target.value)} />

        <label htmlFor="">Manager Name</label>
          <input type="text" name="" id="" value={mgrname} onChange={(e)=>setMgrName(e.target.value)} />

        </div>
        <div className={style.right}>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <fieldset>
 
  <label htmlFor="">Select Gender</label>
  <div className="flex items-center mb-4">
    <input id="gender-option-1" type="radio" name="gender" value="Male" className="w-5 h-5 " onChange={(e)=>setGender(e.target.value)} checked={gender==='Male'}/>
    <label for="gender-option-1" className="block ms-2  text-md font-medium text-white ">
     Male
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="gender-option-2" type="radio" name="gender" value="Female" className="w-5 h-5" onChange={(e)=>setGender(e.target.value)} checked={gender==='Female'}/>
    <label for="gender-option-2" className="block ms-2 text-md font-medium text-white">
      Female
    </label>
  </div>
  </fieldset>
   <label htmlFor="">HR</label>
          <input type="text" name="" id="" value={hr} onChange={(e)=>setHr(e.target.value)}/>

           <label htmlFor="">HR ID</label>
          <input type="text" name="" id="" value={hid} onChange={(e)=>setHid(e.target.value)} />

           <label htmlFor="">Status</label>
          <input type="text" name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} />

           <label htmlFor="">Adress</label>
          <input type="textarea" name="" id="" disabled placeholder='disabled'/>

           <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray" for="user_avatar">Upload Picture</label>
  <input className="block text-sm text-gray-900 border cursor-pointer  focus:outline-none " disabled aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
       
           <button className={style.button30} role="button" onClick={saveEmployee}>Save</button>
        </div>
    
      </div>
    </div>
  )
}

export default AddEmp
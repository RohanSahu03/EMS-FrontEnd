import React, { useState } from 'react'
import style from '../../../CSS/AdminDashboard.module.css'
import Layout from '../../Layout'
import { Link} from 'react-router-dom'
import EmployeeContent from './EmployeeContent'



function EmployeeDashboard({children}) {
const [content,setContent]=useState('')
const [header,setHeader]=useState('')

  return (
    <>
    <Layout>
    <div className={`${style.mainDiv} bg-zinc-600`}>
      <div className={style.sideBar}>

<aside id="default-sidebar" className="relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
      <ul className="space-y-2 font-medium">
         <li>
            <Link to="" onClick={()=>{
               setContent('/editEmp') 
               setHeader('Edit your Details ')
               }}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800  ">
            
               <img src="./images/dashboard/edit.png" alt="" srcset="" className="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white  " aria-hidden="true" fill="currentColor" viewBox="0 0 18 18"/>
               <span className="ms-3">Edit Profile</span>
            </Link>
         </li>
         <li>
            <Link to="" onClick={()=>{
               setContent('/empLeave')
                setHeader('Leave Details ')
               }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 ">
                <img src="./images/dashboard/office.png" alt="" srcset="" className="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white  " aria-hidden="true" fill="currentColor" viewBox="0 0 18 18"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Leave</span>
              
            </Link>
         </li>

         <li>
            <Link to="" onClick={()=>{
               setContent('/empAcc')
                setHeader('Account Details ')
               }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800">
                <img src="./images/dashboard/bank.png" alt="" srcset="" className="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white  " aria-hidden="true" fill="currentColor" viewBox="0 0 18 18"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Account Details</span>
              
            </Link>
         </li>
         <li>
            <Link to="" onClick={()=>{
               setContent('/empProject')
                setHeader('Project Details ')
               }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800  group">
                <img src="./images/dashboard/project.png" alt="" srcset="" className="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white  " aria-hidden="true" fill="currentColor" viewBox="0 0 18 18"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Project</span>
              
            </Link>
         </li>
         <li>
            <Link to="" onClick={()=>{
               setContent('/empResignation')
                setHeader('Resignation Details ')
               }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800  group">
                <img src="./images/dashboard/fired.png" alt="" srcset="" className="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white  " aria-hidden="true" fill="currentColor" viewBox="0 0 18 18"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Resignation</span>
              
            </Link>
         </li>
        
      </ul>
   </div>
</aside>
      </div> 
       <div className={style.rightSide}>
        <div className={style.nav}>
        {header}
        </div>
       
         <EmployeeContent className={style.content} content={content}/>
    
       
      </div>
    </div>
    </Layout>
    </>
  )
}

export default EmployeeDashboard
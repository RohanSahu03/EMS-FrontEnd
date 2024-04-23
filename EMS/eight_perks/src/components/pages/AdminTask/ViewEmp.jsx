import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function ViewEmp() {
  const [empList,setEmpList]=useState([])

  const getAllEmployees=async() => {
    const res=await axios.get('http://localhost:8080/getAllEmployees')
    try {
      if(res!=null){
          setEmpList(res.data)
      }
      else{
        toast('Employee Not Found')
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllEmployees()
  }, [])
  

  return (
    <div>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                   Emp Id
                </th>
              
                <th scope="col" className="px-6 py-3">
                   Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                   Designation
                </th>
                <th scope="col" className="px-6 py-3">
                    Join Date
                </th>
                <th scope="col" className="px-6 py-3">
                   Edit
                </th>
            </tr>
        </thead>
        <tbody>
          {empList.map((item)=>{
            return(
                <tr key={item.index} className="bg-gray-500 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-3  whitespace-nowrap">
                    {item.empid}
                </td>
                <td scope="row" className="px-6 py-3  whitespace-nowrap">
                    {item.empname}
                </td>
                   <td className="px-6 py-3">
                    {item.email}
                </td>
                <td className="px-6 py-3">
                    {item.phone}
                </td>
                <td className="px-6 py-3">
                   {item.designation}
                </td>
                <td className="px-6 py-3">
                   {item.startDate}
                </td>
                <td className="px-6 py-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            )
          })}
            
           
        </tbody>
    </table>
    
</div>

    </div>
  )
}

export default ViewEmp
import React, { useEffect,useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function ViewClient() {
 const [clientList,setClientList]=useState([])

  const getAllClients=async() => {
    const res=await axios.get('http://localhost:8080/getAllClients')
    try {
      if(res.status===200){
          setClientList(res.data)
      }
      else{
        toast('Employee Not Found')
      }
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
getAllClients()
},[])

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
                   Client Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                 <th scope="col" className="px-6 py-3">
                  Edit
                </th>
            </tr>
        </thead>
        <tbody>
          {clientList.map((item)=>{
            return(
                <tr key={item.index} className="bg-gray-500 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-3  whitespace-nowrap">
                    {item.name}
                </td>
                <td scope="row" className="px-6 py-3  whitespace-nowrap">
                    {item.pocemail}
                </td>
                   <td className="px-6 py-3">
                    {item.poc_phone}
                </td>
                <td className="px-6 py-3">
                    {item.loc}
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

export default ViewClient
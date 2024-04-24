import React from 'react'
import style from '../../../CSS/addEmp.module.css'


function AddClient() {
  
  return (
    <div>
        <div className=" flex justify-center items-center  item-center h-[520px]">
            <div className=" h-[400px] w-5/12 flex justify-evenly flex-col ">
                       <input
        type="text"
        placeholder='Client Name'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       
      />

         <input
        type="email"
        placeholder='Email'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       
      />

       <input
        type="phone"
        placeholder='Phone'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       
      />

      <input
        type="text"
        placeholder='Location'
        className="border-b-2 bg-transparent text-white border-gray-300 focus:outline-none focus:border-green-500 w-full py-2 pl-2 mb-6"
       
      />
      <button className={style.buttonclient}>Save</button>
            </div>
        </div>
        
    </div>
  )
}

export default AddClient
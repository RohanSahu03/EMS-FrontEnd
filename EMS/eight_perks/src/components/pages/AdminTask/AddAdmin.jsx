import React from 'react'
import style from '../../../CSS/addEmp.module.css'
function AddAdmin() {
  return (
    <div>
      <div className={style.main}>
        <div className={style.left}>
        
          <label htmlFor="">Admin Name</label>
          <input type="text" name="" id="" />

          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />

           <label htmlFor="">Password</label>
          <input type="password" name="" id="" />

          <button className={style.button30}>Save</button>

        </div>
      </div>
    </div>
  )
}

export default AddAdmin
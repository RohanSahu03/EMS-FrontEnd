import React from 'react'


function Button(props) {
    let type = props.btn
  return (
    <div>
         <button>{type}</button>
    </div>
  )
}

export default Button
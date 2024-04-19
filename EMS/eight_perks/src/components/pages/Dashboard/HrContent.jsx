import React from 'react'
import ViewEmp from '../HrTask/ViewEmp';


function HrContent({content}) {
     let componentToRender;
     switch (content) {

    case '/viewEmpByHr':
      componentToRender = <ViewEmp/>
      break;
   
  }
  return (
    <>
  {componentToRender}
    </>
  )
}

export default HrContent
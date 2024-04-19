import React from 'react'
import AddEmp from '../ManagerTask/AddEmp';
import ViewEmp from '../ManagerTask/ViewEmp';


function DashboardContent({content}) {
     let componentToRender;
     switch (content) {
    case '/addEmpByHr':
      componentToRender = <AddEmp/>;
      break;
    case '/viewEmp':
      componentToRender = <ViewEmp/>;
      break;
   
  }
  return (
    <>
  {componentToRender}
    </>
  )
}

export default DashboardContent
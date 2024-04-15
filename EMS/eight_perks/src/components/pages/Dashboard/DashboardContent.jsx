import React from 'react'
import ViewEmp from '../AdminTask/ViewEmp';
import AddAdmin from '../AdminTask/AddAdmin';
import AddEmp from '../AdminTask/AddEmp';

function DashboardContent({content}) {
     let componentToRender;
     switch (content) {
    case '/addEmp':
      componentToRender = <AddEmp />;
      break;
    case '/viewEmp':
      componentToRender = <ViewEmp />;
      break;
     case '/addAdmin':
      componentToRender = <AddAdmin/>
      break;
   
  }
  return (
    <>
  {componentToRender}
    </>
  )
}

export default DashboardContent
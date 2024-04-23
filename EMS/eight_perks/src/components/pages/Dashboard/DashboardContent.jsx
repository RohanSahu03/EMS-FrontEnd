import React from 'react'
import ViewEmp from '../AdminTask/ViewEmp';
import AddAdmin from '../AdminTask/AddAdmin';
import AddEmp from '../AdminTask/AddEmp';
import AddClient from '../AdminTask/AddClient';
import ViewClient from '../AdminTask/ViewClient';

function DashboardContent({content}) {
     let componentToRender;
     switch (content) {
    case '/addEmp':
      componentToRender = <AddEmp />;
      break;
    case '/viewEmp':
      componentToRender = <ViewEmp />;
      break;
    case '/add-client':
      componentToRender = <AddClient/>;
      break;
    case '/view-clients':
      componentToRender = <ViewClient/>;
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
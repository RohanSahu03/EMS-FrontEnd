import React from 'react'
import Edit from '../EmpTask/Edit';
import Leave from '../EmpTask/Leave';
import Project from '../EmpTask/Project';
import AccDetails from '../EmpTask/AccDetails';
import Resignation from '../EmpTask/Resignation';


function DashboardContent({content}) {
     let componentToRender;
     switch (content) {
    case '/editEmp':
      componentToRender = <Edit/>;
      break;
    case '/empLeave':
      componentToRender = <Leave/>;
      break;
     case '/empProject':
      componentToRender = <Project/>
      break;
    case '/empAcc':
      componentToRender = <AccDetails/>
      break;
    case '/empResignation':
      componentToRender = <Resignation/>
      break;  
    
   
  }
  return (
    <>
  {componentToRender}
    </>
  )
}

export default DashboardContent
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import AdminDashboard from './components/pages/Dashboard/AdminDashboard';
import ManagerDashboard from './components/pages/Dashboard/ManagerDashboard';
import AdminLogin from './components/Auth/AdminLogin';
import ForgotPassword from './components/Auth/ForgotPassword';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/admin-login" element={<AdminLogin/>} />
        <Route path="/hr-login" element={<HRLogin />} />
        <Route path="/manager-login" element={<ManagerLogin/>} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
       
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/managerDashboard" element={<ManagerDashboard />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/submitOtp" element={<Otp />} />
    
      </Routes>
    </div>
  );
}

export default App;

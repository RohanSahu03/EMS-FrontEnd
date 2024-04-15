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
        <Route path="/admin-login" element={<AdminLogin role={"Admin"} />} />
        <Route path="/hr-login" element={<AdminLogin role={"HR"} />} />
        <Route
          path="/employee-login"
          element={<AdminLogin role={"Employee"} />}
        />
        <Route
          path="/manager-login"
          element={<AdminLogin role={"Manager"} />}
        />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
         <Route path="/managerDashboard" element={<ManagerDashboard/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
    
      </Routes>
    </div>
  );
}

export default App;

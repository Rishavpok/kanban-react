
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Registration from './pages/Authentication/Register/Registration.tsx';
import ProtectedRoute from './core/guard/auth_guard.tsx';
import Login from './pages/Authentication/Login/Login.tsx';

function App() {

  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* <Route element={<ProtectedRoute />}>
        
      </Route> */}
    </Routes>
  )
}

export default App
